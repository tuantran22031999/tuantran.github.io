$(document).ready(function () {
    var up = $('.body').offset().top;
    $(window).scroll(function(){
        var top = $('html').scrollTop();
        if(top > up){
            $('.scroll_top').addClass('show');
        }
        else{
            $('.scroll_top').removeClass('show');
        }
    });
});