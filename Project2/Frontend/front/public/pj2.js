$(document).ready(function () {
    
    $('li.nav-item').click(function() { 
        $('li.nav-item').removeClass('on');
        $(this).addClass('on');
    });

    $('.pr').click(function(){
        $('.pr').removeClass('gray');
        $(this).addClass('gray');
    });
});