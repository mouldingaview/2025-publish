
$(document).ready(function(){
    //사이드메뉴 하위메뉴 있을 때 has 클래스 추가
    $('#left-aside nav>ul>li').has('ul').addClass('has');

    $('#left-aside nav>ul>li.has>button').click(function(e){
        e.preventDefault;
        if($(this).parent().hasClass('open')){
            $(this).parent().removeClass('open');
        } else {
            $('#left-aside nav>ul>li.has').removeClass('open');
            var _this = $(this);
            setTimeout(function () {
                $(_this).parent().addClass('open');
            }, 0.2);
        }
    });

    //selectbox css
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
    
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
    
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
    
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
            if ($this.children('option').eq(i).is(':selected')){
            $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected')
            }
        }
    
        var $listItems = $list.children('li');
    
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
    
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
        $list.find('li.is-selected').removeClass('is-selected');
        $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
            $list.hide();
            //console.log($this.val());
        });
    
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });

    $('.btn-refresh').click(function(){
        $(this).addClass('active');
        
        setTimeout(function(){
            $('.btn-refresh').removeClass('active');
        },2000);
    });

    //테이블 상단 안읽음 체크박스 테두리 스타일
    $('.tbl-top .chk-wrap input[type="checkbox"]').click(function(){
        if($(this).prop('checked')){
            $(this).parent().parent().addClass('checked');     
        } else {       
            $(this).parent().parent().removeClass('checked');
        }
    });

    //댓글 오픈
    $('.btn-reply').click(function(){
        var reply = $(this).parent().next();
        if(reply.hasClass('show')){
            reply.removeClass('show');
        } else {                    
            reply.addClass('show');
        }
    });

    $('.write-reply textarea').keyup(function (e) {
        let content = $(this).val();
        
        // 글자수 세기
        if (content.length == 0 || content == '') {
            $('.txt-count').text('(0/200)');
        } else {
            $('.txt-count').text('('+ content.length + '/200)');
        }
        
        // 글자수 제한
        if (content.length > 200) {
            // 200자 부터는 타이핑 되지 않도록
            $(this).val($(this).val().substring(0, 200));
            // 200자 넘으면 알림창 뜨도록
            alert('글자수는 200자까지 입력 가능합니다.');
        };
    });

});