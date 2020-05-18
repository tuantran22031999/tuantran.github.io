$(document).ready(function () {

    var count = 0;
    function changeColor(){
        var arrColor = ['red','green','orange'];
        if(count < arrColor.length){
            $('.row.title h1').css({
                'color':arrColor[count]
            });
            count++;
        }
        else{
            count = 0;
        }
    }
    setInterval(function(){changeColor()},500);
    $('.char').addClass('top');

    $('.blue').click(function(){
        $('body').css({'background':'#83eff8'})
    });
    $('.pink').click(function(){
        $('body').css({'background':'#fa9bc3'})
    });
});