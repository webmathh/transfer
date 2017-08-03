jQuery(document).ready(function($) {
	//Тогле меню
    $(".toggle-mnu").click(function() {
        $(this).toggleClass("on");
        $(".nav").slideToggle();
        return false;
    });
    $('.aside__mobile').click(function () {
        $('.aside__mobile').toggleClass('active');
        $('.aside__nav').slideToggle();
    });
    //Ресайз сайта
    $(window).resize(function () {
       if($(document).width() > 992 ) {
           $('.nav__item_mobile').hide();
           $('.nav').css('display', 'inline-block');

       }
       else {
           if ($('.toggle-mnu').hasClass('on')) {
               $('.nav__item_mobile').show();
               $(".nav").slideDown();
           }
           else {
               $('.nav').hide();
           }
           if ($('.aside__mobile').hasClass('actvie')) {
               $('.aside__nav').show();
           }
       }
    });
    //Слайдер
     var slider = $('.slider');
    slider.owlCarousel({
        dots:false,
        nav:false,
        margin: 10,
        responsive: {
            0: {
                items:1
            },
            480: {
                items: 2

            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items:5
            }
        }
    });
    $('.slider__button_left').click(function () {
        slider.trigger('prev.owl.carousel');
    });
    $('.slider__button_right').click(function () {
        slider.trigger('next.owl.carousel');
    });
    $('.card__button').hover(function () {
        $('.card__button').removeClass('active');
        $(this).addClass('active');
    });
    $('.tabs__title').click(function (e) {
        e.preventDefault();
        $('.tabs__button').removeClass('active');
        $('.tabs__list').slideUp();
        $(this).parent().toggleClass('active');
        $(this).parent().children('.tabs__list').slideToggle();
    })

});