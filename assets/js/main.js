$(document).ready(function() {

    var stars = ".stars-1, .stars-2, .stars-3";

    $(".plan-100").hover(function() {
        $(stars).toggleClass("speed100");

    });

    $(".plan-300").hover(function() {
        $(stars).toggleClass("speed300");

    });

});