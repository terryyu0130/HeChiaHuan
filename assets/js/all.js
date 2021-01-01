"use strict";

(function () {
  $(document).ready(function () {
    //Modal
    $('.target').on('click', function () {
      $(this).siblings('.modal').fadeIn();
    });
    $('.close').on('click', function () {
      $('.modal').fadeOut();
    }); //header

    $('.btn-arrow').on('click', function () {
      $('.header .menu').slideToggle();
      $(this).toggleClass('active');
    }); //memo

    $('.btn-program').on('click', function () {
      $(this).parent().siblings().slideToggle();
      $(this).toggleClass('active');
    });
  });

  if (screen.width > 414) {
    // Swiper
    var mySwiper = new Swiper(".swiper-container", {
      // Optional parameters
      // 預設值是derection: 'horizonral，所以拿掉vertical就變水平'
      //direction: 'vertical',
      derection: "horizonral",
      //速度
      loop: true,
      //是否重複播放
      speed: 2400,
      //If we need Auto Play
      autoplay: {
        delay: 3000
      },
      //If we want to change effect
      effect: "slide",
      // If we need pagination
      pagination: {
        el: ".swiper-pagination"
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      } // And if we need scrollbar
      //如果不要就連同html一起拿掉
      // scrollbar: {
      //     el: '.swiper-scrollbar',
      // },

    });
  } else {
    var mySwiper = new Swiper(".swiper-container", {
      loop: false
    });
  }
})();
//# sourceMappingURL=all.js.map
