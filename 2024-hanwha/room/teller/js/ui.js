$(document).ready(function(){
    
    //fullH();
    //mainContH();
    //sheetContH();
    //tabContH();
    //gridItemH();

    /*$(window).resize(function(){
        fullH();
        mainContH();
        sheetContH();
        tabContH();
        gridItemH();
    });*/   
    
    
    //메뉴 레이어 show 슬라이드, 안쪽 레이어팝업 위치잡기
    $('nav li').click(function(){
        $('.aside-ex').addClass('show');
        var asidePopW = $('.aside-ex').find('.layer-pop').innerWidth();
        var asidePopH = $('.aside-ex').find('.layer-pop').innerHeight();
        $('.aside-ex .layer-pop').css({
            "margin-left": '-' + asidePopW/2 + "px",
            "margin-top": '-' + asidePopH/2 + "px"
        });
    });
    
    $('.btn-close-ex').click(function(){
        $('.aside-ex').removeClass('show');
    }); 
    
    //사이드메뉴 클릭시 확장
    //var menu = $('nav ul li');
    //$(".ex-cont").eq(0).show(0);
    //$(menu).click(function () {
    //    var idx = $(this).index();
    //    $(".ex-cont").hide();
    //    $(".ex-cont").eq(idx).show();
    //    $(menu).removeClass("on");
    //    $(this).addClass("on");
    //});
    
    //탭 컨텐츠 show
   var tabmenu = $('.tab-style01 li');
    $(".tab-cont").eq(0).show(0);
    $(tabmenu).click(function () {
       var idx = $(this).index();
       $(".tab-cont").hide();
       $(".tab-cont").eq(idx).show();
       $(tabmenu).removeClass("sele");
       $(this).addClass("sele");
   });

    //
    $('.btn-show').click(function(){
        if($(this).hasClass('hide')){
            $(this).removeClass('hide');
            $('.box-info .box').slideDown();
        } else {            
            $(this).addClass('hide');
            $('.box-info .box').slideUp();
        }
    });

    //비디오 영역 설정 버튼 노출
    $('.video-area .btn-area>div').hover(
        function() {
            $(this).find('.option-wrap').addClass('show');
        }, function() {
            $(this).find('.option-wrap').removeClass('show');
        }
    );
    //비디오 영역 설정 버튼 컨트롤
    $('.option-wrap .option button').click(function(){ 
        var optionClass = $(this).attr('class');
        $('.option-wrap').removeClass('show');
        //var btnClass = $('.btn-area>div>button').attr('id');
        $(this).parent().parent().parent().children('.icon-btn').attr('class', optionClass);
       
    });

    $('.icon-btn.plus').click(function(){
        $(this).toggleClass('more');
        $(this).parent().next('.cert-area').find('ol').toggleClass('open');
    });

    $('.icon-btn.refresh').click(function(){
        $(this).addClass('active');
        
        setTimeout(function(){
            $('.icon-btn.refresh').removeClass('active');
        },2000);
    });


    //비디오 영역 인증절차 노출
    $('.cert-area li').hover(function(){
        $(this).toggleClass('show');
    });

    //비디오 영역 상담자 이름 말줄임
    $('.video-area .customer .name').each(function(){
        var length = 5;  
        $(this).each(function(){
            if($(this).text().length >= length){
                $(this).text($(this).text().substr(0, length) + '...');	
            }
        });
    });

    //화면 F11
    $('.btn-zoom').click(function(){
        if($(this).hasClass('zoom')){
            $(this).removeClass('zoom');
            closeFullScreenMode();
        } else {            
            $(this).addClass('zoom');
            openFullScreenMode();
        }
    });

    //공유노트 dropdown
    $('.dropdown').click(function(){
        $(this).toggleClass('show');
    });

    
    $('.list-style01 li button').click(function(){
        $('.list-style01 li').removeClass('sele');
        $(this).parent().addClass('sele');            
    });

    //첨부서류 전체선택
    $("#check_all").on("click", function () {
        var checked = $(this).hasClass("all");
      
        if(checked){
            $(this).removeClass("all");
            $(this).find('span').text("전체선택");
            $('.list-chk').find('input:checkbox').prop("checked", false);
        } else {
            $(this).addClass("all");
            $(this).find('span').text("선택해제");
            $('.list-chk').find('input:checkbox').prop("checked", true);
        }
      });
      
    $(".list-chk input:checkbox").on('click', function () {
        var is_checked = true;
        $(".list-chk input:checkbox").each(function() {
            is_checked =  is_checked && $(this).is(":checked");
        });
        $("#check_all").addClass("all");
        $("#check_all").find('span').text("선택해제");
    });

    //첨부서류 파일삭제
    $('.btn-del').click(function(){
        $(this).parent().parent().remove();
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
    

  
    
    //scroll-box 하단 그림자
    /*if( $(".scroll-box").hasScrollBar() ){  alert(0);
        $(".scroll-box:after").show();
    } else {         alert(1);
        $(".scroll-box:after").hide();
    }*/

    /*function gridItemH(){
        var videoAreaH = $('.video-area').height();
        var videoAreaH2 = (videoAreaH - 40)/41;
        var videoArea3 = videoAreaH2 * 9;
        var videoArea4 = videoAreaH2 * 16;
        $('.video-area .grid-item1').outerHeight(videoArea3 + 'px');
        $('.video-area .grid-item1').outerWidth(videoArea4 + 'px');
        $('.grid-item2,.grid-item3,.grid-item4,.grid-item5').outerHeight(videoArea4 + 'px');
        $('.grid-item2,.grid-item3,.grid-item4,.grid-item5').outerWidth(videoArea3 + 'px');
    } */   
});

/*var winH = $(window).innerHeight();

//메뉴 레이어, wrap 높이
function fullH(){       
    $('#wrap, .aside-wrap').height(winH + 'px');
}

//메인 컨텐츠 높이
function mainContH(){            
    $('.info-area, .video-area').height(winH - 140 + 'px');
}
function sheetContH(){            
    $('.sheet-area').height(winH - 80 + 'px');
}

//tab contents 높이
function tabContH(){            
    $('.tab-cont .scroll-box').height(winH - 514 + 'px');
}*/


var doc = document.documentElement;
// 전체화면 설정
function openFullScreenMode() {
    if (doc.requestFullscreen)
        doc.requestFullscreen();
    else if (doc.webkitRequestFullscreen) // Chrome, Safari (webkit)
        doc.webkitRequestFullscreen();
    else if (doc.msRequestFullscreen) // IE or Edge
        doc.msRequestFullscreen();
}
// 전체화면 해제
function closeFullScreenMode() {
    if (document.exitFullscreen)
        document.exitFullscreen();
    else if (document.webkitExitFullscreen) // Chrome, Safari (webkit)
        document.webkitExitFullscreen();
    else if (document.msExitFullscreen) // IE or Edge
        document.msExitFullscreen();
}

//채팅창 ad
/*function initializeChatToggle() {
    const chatContainer = document.getElementById('chat-container');
    const toggleChatBox = () => {
        chatContainer.classList.toggle('visible');
    }
    document.getElementById('chat-toggle-button').addEventListener('click', toggleChatBox);
    document.getElementById('btn-chat-close').addEventListener('click', toggleChatBox);
}

document.addEventListener('DOMContentLoaded', function() {
    initializeChatToggle();
});*/
