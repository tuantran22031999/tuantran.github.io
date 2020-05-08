$(document).ready(function () {
    $('ul.navbar-nav li').click(function(){

        $('ul.navbar-nav li').removeClass('red');
        $(this).addClass('red');
    });
});