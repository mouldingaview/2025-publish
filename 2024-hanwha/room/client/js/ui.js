$(document).ready(function(){
    
    var winH = $(window).innerHeight();
    var headerH = $('header').innerHeight();
    var contTopH = $('.cont-top').innerHeight();
    var btnWrapH = $('.btn-wrap').innerHeight();
    var contMidH = winH - (headerH + contTopH + btnWrapH + 20);//20 : cont-wrap 윗패딩
    
    $('.cont-mid').height(contMidH + 'px');

});