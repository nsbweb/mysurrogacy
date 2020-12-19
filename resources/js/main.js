$(function() {
    mq_red = '(min-width: 1300px)';
    mq_orange = '(min-width: 992px) and (max-width: 1299px)';
    mq_purple = '(max-width: 991px)';
    mq_yellow = '(min-width: 768px) and (max-width: 991px)';
    mq_green = '(max-width: 767px)';
    mq_blue = '(max-width: 479px)';
    mq_brown = '(max-width: 599px)';
    anSp = 500;
    anSpFast = 400; 
    isMobileNav = false;
    mobileNav = '';
    checkMQs();
    //adjustMenuHov();
});
$(window).resize(function() {
    waitForFinalEvent(function() {
        sizeOrientationChange();
    }, 100, 'main resize');
    //initHeader();
    //adjustMenuHov();
});
if (!window.addEventListener) {
    window.attachEvent('orientationchange', sizeOrientationChange);
} else {
    window.addEventListener('orientationchange', sizeOrientationChange, false);
}

function sizeOrientationChange() {
    checkMQs();
}

var $nav_overlay = $('#nav_overlay');
$(".menuTrigger").bind('touchend , click', function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $("#nav_menu").stop().slideUp();
        $(this).removeClass("active");
        $nav_overlay.hide();
    } else {
        $(this).addClass("active");
        $("#nav_menu").stop().slideDown();
        $nav_overlay.stop(true, true).fadeTo(200, 0.3);
    }
});

var ChangeView = function() {}

function checkMQs() {
    if (Modernizr.mq('only all')) {
        mq_red_check = Modernizr.mq(mq_red);
        mq_orange_check = Modernizr.mq(mq_orange);
        mq_yellow_check = Modernizr.mq(mq_yellow);
        mq_green_check = Modernizr.mq(mq_green);
        mq_blue_check = Modernizr.mq(mq_blue);
        mq_purple_check = Modernizr.mq(mq_purple);
    } else {
        mq_red_check = false;
        mq_orange_check = true;
        mq_yellow_check = false;
        mq_green_check = false;
        mq_blue_check = false;
        mq_purple_check = false;
    }
}

function checkFeatures() {
    touchEnabled = Modernizr.touch;
    if (touchEnabled) {
        $('html, body').removeClass('no-touch').addClass('touch-mod');
    }
    formPlaceholders = Modernizr.input.placeholder;
    boxShadows = Modernizr.boxshadow;
    isIE7 = $('html').hasClass('ie7');
    isIE8 = $('html').hasClass('ie8');
    if (forms.length) {}
}
var waitForFinalEvent = (function() {
    var timers = {};
    return function(callback, ms, uniqueId) {
        if (!uniqueId) {
            uniqueId = "Don't call this twice without a uniqueId";
        }
        if (timers[uniqueId]) {
            clearTimeout(timers[uniqueId]);
        }
        timers[uniqueId] = setTimeout(callback, ms);
    };
})();

function setLocation(url) {
    window.location.href = url
}
$(".toggleMenu").click(function(e) {
    e.preventDefault();
    if ($(this).hasClass('active')) {
        $("body").removeClass('menuOpen');
        $('.mobile-nav').animate({
            'opacity': 1
        }, 1000, function() {
            $(this).hide()
        });
        $("html").removeClass('scroll-hidden');
        $(this).removeClass("active");
    } else {
        $(this).addClass("active");
        $('.mobile-nav').show(0, function() {
            $("body").addClass('menuOpen');
        });
        $("html").addClass('scroll-hidden');
    }
});
$(".totop").hide();
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {
            $('.totop').slideDown();
        } else {
            $('.totop').slideUp();
        }
    });
    $('.totop a').click(function(e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: 0
        }, 500);
    });
});
$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('header').addClass('header-sm');
            $('.wrapper').addClass('wrapper-sm');
        } else {
            $('header').removeClass('header-sm');
            $('.wrapper').removeClass('wrapper-sm');
        }
    });
    $('.scroll-down').click(function(e) {
        e.preventDefault();
        $.scrollTo('#scrollTraget', 500, {
            offset: -150
        });
    });
});
jQuery(window).ready(function() {
    theme.init();
});
jQuery(window).load(function() {
    theme.initAnimation();
});
'use strict';
var theme = function() {
    function handlePreventEmptyLinks() {
        $('a[href=#]').click(function(event) {
            event.preventDefault();
        });
    }

    function handleToTopButton() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 10) {
                $('.to-top').css({
                    bottom: '15px'
                });
            } else {
                $('.to-top').css({
                    bottom: '-100px'
                });
            }
        });
        $('.to-top').click(function() {
            $('html, body').animate({
                scrollTop: '0px'
            }, 800);
            return false;
        });
    }
    return {
        onResize: function() {
            resizePage();
        },
        init: function() {
            handleToTopButton();
        },
        initAnimation: function() {
            var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
            if (isMobile == false) {
                $('*[data-animation]').addClass('animated');
                $('*[data-animation]').addClass('animated');
                $('.animated').waypoint(function(down) {
                    var elem = $(this);
                    var animation = elem.data('animation');
                    if (!elem.hasClass('visible')) {
                        var animationDelay = elem.data('animation-delay');
                        if (animationDelay) {
                            setTimeout(function() {
                                elem.addClass(animation + ' visible');
                            }, animationDelay);
                        } else {
                            elem.addClass(animation + ' visible');
                        }
                    }
                }, {
                    offset: $.waypoints('viewportHeight') - 60
                });
            }
        }
    }
}();
if (navigator.userAgent.match(/(iPhone|Android|BlackBerry)/)) {} else if (navigator.userAgent.match(/(iPod|iPad)/)) {
    $('a[href^=tel]').click(function(e) {});
} else {
    $('a[href^=tel]').click(function(e) {
        e.preventDefault();
    });
    $('a[href^=tel]').addClass('disable')
}
$('#main-menu ul > li:has(".submenu")').addClass('has-submenu');


$('.faqslist dt').click(function() {
    var FaqAns = $(this).next('dd')
    $(this).next(FaqAns).slideToggle('slow');
    $(this).toggleClass('active');
});

$('.accordion-box .tl').click(function() {
    var accordionCont = $(this).next('.accordion')
    $(this).next(accordionCont).slideToggle('slow');
    $(this).toggleClass('active');
});

$('.hrzTabs').each(function(){
    $(this).responsiveTabs({
        startCollapsed: 'accordion'
    });
});

$(".r-tabs-accordion-title").each(function(){
    var thisAnchorHref = $(this).find('a').attr('href');
    $(this).addClass('box-cont r-tabs-tab');
    if(thisAnchorHref === "#tab-1"){
        $(this).addClass('green-light');
    }else if(thisAnchorHref === "#tab-2"){
        $(this).addClass('yellow');
    }else if(thisAnchorHref === "#tab-3"){
        $(this).addClass('blue');
    }else if(thisAnchorHref === "#tab-4"){
        $(this).addClass('pink');
    }else {
    }
});

$('.btn-admission').click(function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
    }else{
        $(this).removeClass('active');
    }
});

$('.navbar-toggler').click(function(){
    if(!$(this).hasClass('active')){
        $(this).addClass('active');
        $('#navbarHeader').slideDown().removeClass('d-none');
    }else{
        $(this).removeClass('active');
        $('#navbarHeader').slideUp();
    }
});

$(function(){
    var $elem = $('.slide .thumn-desc p'); // The element or elements with the text to hide

    $elem.each(function(i){
        var $limit = 80; // The number of characters to show
        var $str = $(this).html(); // Getting the text
        var $strtemp = $str.substr(0,$limit);   // Get the visible part of the string
        var $PopUPID = $(this).parent().find('h3').text().replace(/[_\W]+/g, "-").toLowerCase();
        console.log($PopUPID);

        $(this).parents('.thumn-desc').attr('id', $PopUPID);
        $str = $strtemp + '<a class="inline-popup" href="#'+ $PopUPID + '">' + ' Read More' + '</a>' + '<span class="hide">' + $str.substr($limit,$str.length) + '</span>';
        $(this).html($str); // Write the string to the DOM 
    });
});
/* Single Banner - 27-08-2020*/

/* Navigation JS */
$(".sub-menu").hide();

// Shows sub-menu when it's parent is hovered.
$(".sub-menu").parent("li").hover(function () {
    $(this).find(">.sub-menu").not(':animated').slideDown(300);
    $(this).toggleClass("active selected hovered");
});

// Hides sub-menu when mouse leaves the zone.
$(".sub-menu").parent("li").mouseleave(function () {
    $(this).find(">.sub-menu").slideUp(150);
});

// Prevents scroll to top when clicking on <a href="#"> 
$(".has-submenu a[href=\"#\"]").click(function () {
    return false;
});

/* Navigation Active JS */
var href = window.location.href;
  $('nav a').each(function(e,i) {
    if (href.indexOf($(this).attr('href')) >= 0) {
        $('.active').removeClass('active');
        $(this).parent().addClass('active');
        $(this).parents('.has-submenu').addClass('active');
    }
  });
/* Navigation Active JS */

/* Navigation JS */
var $owl = $('.owl-cara');

$owl.children().each( function( index ) {
    $(this).attr( 'data-position', index ); // NB: .attr() instead of .data()
});

$owl.owlCarousel({
    center: true,
    loop: true,
    responsiveClass:true,
    nav:true,
    navText:[,],
    dots:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
});

$(document).on('click', '.owl-item>div', function() {
    // see https://owlcarousel2.github.io/OwlCarousel2/docs/api-events.html#to-owl-carousel
    var $speed = 300;  // in ms
    $owl.trigger('to.owl.carousel', [$(this).data( 'position' ), $speed] );
});

var $owlSingle = $('.owl-cara-single');
$owlSingle.owlCarousel({
    items:1,
    loop:true,
    nav: true,
    navText:[,],
    margin:0,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:true
});