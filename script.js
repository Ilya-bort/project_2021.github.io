$(function () {
    //Класс "ibj"
    function ibj() {
        $.each($('.ibj'), function (index, val) {
            if ($(this).find('img').length > 0) {
                $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")')
            }
        })
    }
    ibj()
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Меню-бургер
    $('.header__adaptiv').click(function () {
        $(this).toggleClass('active')
        $('body').toggleClass('lock')
        $('.header__list').toggleClass('active')
    })
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Изменение иконки
    $('.services__icon img').mouseout(function () {
        $(this).attr('src', 'images/icons/02/fa-font.svg')
    })
    $('.services__icon img').mouseover(function () {
        $(this).attr('src', 'images/icons/02/fa-font-white.svg')
    })
    $('.services__icon_m img').mouseout(function () {
        $(this).attr('src', 'images/icons/03/fa-code.svg')
    })
    $('.services__icon_m img').mouseover(function () {
        $(this).attr('src', 'images/icons/03/fa-code-white.svg')
    })
    $('.services__icon_mod img').mouseout(function () {
        $(this).attr('src', 'images/icons/04/fa-support.svg')
    })
    $('.services__icon_mod img').mouseover(function () {
        $(this).attr('src', 'images/icons/04/fa-support-white.svg')
    })
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    $('.info-form__link img').mouseout(function () {
        $(this).attr('src', 'images/form/01/fa-map-marker.svg')
    })
    $('.info-form__link img').mouseover(function () {
        $(this).attr('src', 'images/form/01/fa-map-marker_red.svg')
    })
    $('.info-form__link_m img').mouseout(function () {
        $(this).attr('src', 'images/form/02/fa-mobile-phone.svg')
    })
    $('.info-form__link_m img').mouseover(function () {
        $(this).attr('src', 'images/form/02/fa-mobile-phone_red.svg')
    })
    $('.info-form__link_mo img').mouseout(function () {
        $(this).attr('src', 'images/form/03/fa-envelope-o.svg')
    })
    $('.info-form__link_mo img').mouseover(function () {
        $(this).attr('src', 'images/form/03/fa-envelope-o_red.svg')
    })
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Слайдер
    $('.about__body').slick(
        {
            arrows: true,
            dots: false,
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            responsive: [
                {
                    breakpoint: 1215,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                    }
                },
                {
                    breakpoint: 905,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                    }
                },
                {
                    breakpoint: 635,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },

            ]
        }
    )
    $('.slider__body').slick(
        {
            arrows: false,
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1215,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 905,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 635,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    }
                },

            ]
        }
    )
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Фильтр
    $('.works__item').click(function () {
        var i = $(this).data('filter')
        console.log(i)
        if (i == 1) {
            $('.works__column').show()
        } else {
            $('.works__column').hide()
            $('.works__column.f_' + i).show()
        }
        return false
    })
    //-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------


})
//Прокутка страницы:
function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth',
    })
}
var toServices = document.querySelector('.header__link_2');
var services = document.querySelector('.services');
toServices.addEventListener('click', () => {
    scrollTo(services);
})
var toAbout = document.querySelector('.header__link_3');
var about = document.querySelector('.about');
toAbout.addEventListener('click', () => {
    scrollTo(about);
})
var toFilter = document.querySelector('.header__link_4');
var filter = document.querySelector('.works');
toFilter.addEventListener('click', () => {
    scrollTo(filter);
})
var toPlans = document.querySelector('.header__link_5');
var plans = document.querySelector('.plans');
toPlans.addEventListener('click', () => {
    scrollTo(plans);
})
var toSlider = document.querySelector('.header__link_6');
var slider = document.querySelector('.slider');
toSlider.addEventListener('click', () => {
    scrollTo(slider);
})
var toForm = document.querySelector('.header__link_7');
var form = document.querySelector('.form');
toForm.addEventListener('click', () => {
    scrollTo(form);
})
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------