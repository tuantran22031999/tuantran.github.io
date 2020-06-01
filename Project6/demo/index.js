const player = new Plyr('#player');

var light = document.getElementsByClassName('light');
var night = document.getElementsByClassName('night');
var body = document.getElementsByTagName('body');
var item = document.getElementsByClassName('nav-item');

night[0].addEventListener('click',function(){
    body[0].classList.add('black');
    body[0].classList.remove('white');
});

light[0].addEventListener('click',function(){
    body[0].classList.add('white');
    body[0].classList.remove('black');
});
setInterval(function(){
    for(var i = 0;i < item.length; i++){
        item[i].addEventListener('click',function(){
            console.log(item[i]);
            for(var i = 0;i < item.length; i++){
                item[i].classList.remove('red');
            }
            item[i].classList.add('red');
        });
    }
},1000);


$(document).ready(function () {
    $('.other').click(function(){
        $('.cmt').toggleClass('long');
    });
});