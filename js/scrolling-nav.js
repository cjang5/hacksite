$(document).ready(function () {
    $('.main_image').fadeIn(1000).addClass('appear');
});

//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 100) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
    
    if ($(".navbar").offset().top > 500) {
        $(".about_text").fadeIn(1000).addClass("appear");
    }
    
    if ($(".navbar").offset().top > 550) {
        $(".about-modals").fadeIn(1000).addClass("appear");
    }
    
    if ($(".navbar").offset().top > 1250) {
        $(".video").fadeIn(1000).addClass("appear");
    }
    
    if ($(".navbar").offset().top > 1850) {
        $(".team-modals").fadeIn(1000).addClass("appear");
    }
    
});

/*
$(window).scroll(function() {
    if ($".navbar").offset().top > 300) {
        $(".about_text").fadeIn(1000).addClass("appear");
    }
});*/

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
