$(function(){

    $('.slider__inner-top').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<div class="slick-arrow arrow-prev"></div>',
        nextArrow: '<div class="slick-arrow arrow-next"></div>',
        fade: true,
        asNavFor: '.slider__inner-bottom',
        responsive: [
          {
            breakpoint: 760,
            settings: {
              arrows : false,
                   }
          }]
      });
      $('.slider__inner-bottom').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        asNavFor: '.slider__inner-top',
        dots: true,
        focusOnSelect: true
      });

      $('.header__menu-btn').on('click', function(){
        $('.header__menu-list').slideToggle();
      });

});