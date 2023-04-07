$(document).ready(function () {
    $('.clients_slider.owl').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    $('.slick-slider').slick({
        centerMode: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        swipe: true,
        autoplaySpeed: 3000,
        autoplay: true,
        swipeToSlide: true,
        speed: 300,
        responsive: [{
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
             breakpoint: 400,
             settings: {
                arrows: false,
                slidesToShow: 1,
                slidesToScroll: 1
             }
          }]
      });
});