$(document).ready(function(){
    
    //상단버튼영역 접기펼치기
    $('.btn-ex').click(function(){
        if($(this).hasClass('fold')){
            $(this).removeClass('fold');
            $('#top-btn-area dd').slideUp();
            $('#top-btn-area .sele dt button').css('border-radius' ,'5px');
        } else {            
            $(this).addClass('fold');
            $('#top-btn-area dd').slideDown();
            $('#top-btn-area .sele dt button').css('border-radius' ,'5px 5px 0 0');
        }
    });

    $('#top-btn-area dt button').click(function(){
        if($(this).parent().parent().hasClass('sele')){
            
        } else {
            $('#top-btn-area dl').removeClass('sele');
            $(this).parent().parent().addClass('sele');
        }
    });
    
    $('#top-btn-area dt button').click(function(){
        if($('.btn-ex').hasClass('fold')){
            $('#top-btn-area .sele dt button').css('border-radius' ,'5px 5px 0 0');
        } else {
            $('#top-btn-area .sele dt button').css('border-radius' ,'5px');
        }
    });


    //상단 버튼 클릭시 토스트메세지 아이콘변경
    $('.btn-ctrl').click(function () {

        var idx = $(this).index();
        var idxx = idx + 2;

        $(".msg-toast").addClass("toast");        
        $('.msg-toast p').attr('class', 'icon0' + idxx);

        setTimeout(function () {            
            $(".msg-toast").removeClass("toast");
        }, 4.0 * 500);
    });

    //고객성명 버튼 클릭시 
    $('#top-btn-area dt button').click(function () {

        $(".msg-toast").addClass("toast");        
        $('.msg-toast p').attr('class', 'icon01');

        setTimeout(function () {            
            $(".msg-toast").removeClass("toast");
        }, 4.0 * 500);
    });
        


});