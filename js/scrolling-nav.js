$(document).ready(function () {
    $('.main_image').fadeIn(1000).addClass('appear');
});

/*
$(window).scroll(function() {
  if ($(".navbar").offset().top == 0) {
    $(".main_image").fadeOut();
  } else if ($(".navbar").offset().top > 45) {
    $(".main_image").fadeIn();
    $(".main_image").addClass("appear");
  }
}); */

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});
