
$(document).ready(function(){
    
    //메뉴 동작
    $('#left-aside nav>ul>li').has('ul').addClass('has');
    $('#left-aside nav>ul>li.has>a').after('<button type="button"><span class="hide">펼치기</span></button>');

    $('#left-aside nav>ul>li.has button').click(function(){
        
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

    //설정관리 radio on/off
    /*$('.switch.type02 input').click(function(){ 
        $(this).parent().removeClass('off');           
        if($(this).is(':first-child') && $(this).prop('checked')){
            $(this).parent().addClass('off');
        } else {            
            $(this).parent().removeClass('off');
        }
    });*/
    
    //새로고침 버튼 동작
    $('.btn-refresh').click(function(){
        $(this).addClass('active');
        
        setTimeout(function(){
            $('.btn-refresh').removeClass('active');
        },2000);
    });
    //탭 컨텐츠 show
    /*var tabmenu = $('.tab-style01 li');
    $(".tab-cont").eq(0).show(0);
    $(tabmenu).click(function () {
        var idx = $(this).index();
        $(".tab-cont").hide();
        $(".tab-cont").eq(idx).show();
        $(tabmenu).removeClass("sele");
        $(this).addClass("sele");
    });*/   
    
    //selectbox css
    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
    
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        
        var $selectWrapper = $this.parent('div.select');
        
        // select 요소에 disabled 속성이 있으면 .select에 disabled 클래스 추가
        if ($this.is(':disabled')) {
            $selectWrapper.addClass('disabled');
        }
        
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
                $('li[rel="' + $this.children('option').eq(i).val() + '"]').addClass('is-selected');
            }
        }
    
        var $listItems = $list.children('li');
    
        $styledSelect.click(function(e) {
            e.stopPropagation();
            
            // select 요소 또는 부모에 disabled 클래스가 없을 때만 동작
            if (!$selectWrapper.hasClass('disabled')) {
                $('div.select-styled.active').not(this).each(function(){
                    $(this).removeClass('active').next('ul.select-options').hide();
                });
                $(this).toggleClass('active').next('ul.select-options').toggle();
            }
        });
    
        $listItems.click(function(e) {
            e.stopPropagation();
            
            // select 요소 또는 부모에 disabled 클래스가 없을 때만 동작
            if (!$selectWrapper.hasClass('disabled')) {
                $styledSelect.text($(this).text()).removeClass('active');
                $this.val($(this).attr('rel'));
                $list.find('li.is-selected').removeClass('is-selected');
                $list.find('li[rel="' + $(this).attr('rel') + '"]').addClass('is-selected');
                $list.hide();
            }
        });
    
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });
    });


    var fileTarget = $('.filebox .upload-hidden');

    fileTarget.on('change', function(){  // 값이 변경되면
      if(window.FileReader){  // modern browser
        var filename = $(this)[0].files[0].name;
      } 
      
      // 추출한 파일명 삽입
      $(this).siblings('.upload-name').val(filename);
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

    //첨부파일 삭제
    $('.btn-file-del').click(function(){
        $(this).parent().remove();
    });
    
});