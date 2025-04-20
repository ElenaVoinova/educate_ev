$(document).ready(function(){
    $(".reviews__slider").owlCarousel({
        loop: true,
        smartSpeed: 600,
        margin: 15,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            720:{
                items:2
            },
            1280:{
                items:2
            },
            1440:{
                items:3
            }
        }
    });

    $('.slider-prev').click(function() {
        $(".reviews__slider").trigger('prev.owl.carousel');
    });

    $('.slider-next').click(function() {
        $(".reviews__slider").trigger('next.owl.carousel');
    });
});