$(document).ready(function () {
    setInterval(function(){
        var next = $('.active').next();
        if(next.length === 1){
        $('.active').addClass('hide');
        next.addClass('show');
        setTimeout(function(){
            $('.active').removeClass('hide');
            $('.active').removeClass('active');
        },500);
        setTimeout(function(){
            next.removeClass('show');
            next.addClass('active');
        },500);}
        else{        
            $('.active').addClass('hide');
            $('ul.sl li:nth-child(1)').addClass('show');
            setTimeout(function(){
            $('.active').removeClass('hide');
            $('.active').removeClass('active');
            },500);
            setTimeout(function(){
            $('ul.sl li:nth-child(1)').removeClass('show');
            $('ul.sl li:nth-child(1)').addClass('active');
            },500);
    }
    },10000);

    $('#sgn').click(function(){
        $('.sign_in').addClass('long');
        $('.log_in').addClass('short');
    });
  
    $('#lgn').click(function(){
        $('.sign_in').removeClass('long');
        $('.log_in').removeClass('short');
    });

    $('#alr').click(function(){
        $('ul.alert').toggleClass('show_alr');
    });
});