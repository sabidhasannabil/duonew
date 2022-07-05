//hero video slider
var swiper = new Swiper(".hero-slider", {
  slidesPerView: 3,
  spaceBetween: 4,
  slidesPerGroup: 2,
  loop: false,
//   loopFillGroupWithBlank: true,
  freeMode: true,
  // navigation: {
  //   nextEl: ".swiper-button-next",
  //   prevEl: ".swiper-button-prev",
  // },
  breakpoints: {
      // when window width is >= 640px
      576: {
          spaceBetween: 8,
          slidesPerView: 3,
          slidesPerGroup: 2,
          freeMode: false
      },
      768: {
          spaceBetween: 8,
          slidesPerView: 3,
          slidesPerGroup: 2,
          freeMode: false
      },
      992: {
        spaceBetween: 8,
        slidesPerView: 4,
        slidesPerGroup: 2,
        freeMode: false
    },
      1200: {
        spaceBetween: 8,
        slidesPerView: 5,
        slidesPerGroup: 2,
        freeMode: false
    },
      1400: {
          spaceBetween: 8,
          slidesPerView: 6,
          slidesPerGroup: 2,
          freeMode: false
      },
      1700: {
          spaceBetween: 8,
          slidesPerView: 7,
          slidesPerGroup: 2,
          freeMode: false
      },
  },
});


var swiper = new Swiper(".categoriesSwiper", {
    slidesPerView: 2,
    spaceBetween: 8,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    freeMode: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    breakpoints: {
        // when window width is >= 640px
        576: {
            spaceBetween: 8,
            slidesPerView: 2,
            slidesPerGroup: 1,
            freeMode: true
        },
        768: {
            spaceBetween: 8,
            slidesPerView: 3,
            slidesPerGroup: 2,
            freeMode: true
        },
        1000: {
          spaceBetween: 8,
          slidesPerView: 4,
          slidesPerGroup: 3,
          freeMode: true
        },
        1200: {
            spaceBetween: 8,
            slidesPerView: 4,
            slidesPerGroup: 3,
            freeMode: true
        },
        1500: {
          spaceBetween: 8,
          slidesPerView: 8,
          slidesPerGroup: 3,
          freeMode: true
        },
        1700: {
            spaceBetween: 8,
            slidesPerView: 8,
            slidesPerGroup: 5,
            freeMode: true
        },
    },
  });






var swiper = new Swiper(".movieSwiper", {
    slidesPerView: 2,
    spaceBetween: 8,
    slidesPerGroup: 1,
    // loop: true,
    // loopFillGroupWithBlank: true,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 640px
        576: {
            spaceBetween: 8,
            slidesPerView: 2,
            slidesPerGroup: 1,
            freeMode: true
        },
        768: {
            spaceBetween: 8,
            slidesPerView: 3,
            slidesPerGroup: 2,
            freeMode: true
        },
        1000: {
          spaceBetween: 8,
          slidesPerView: 4,
          slidesPerGroup: 3,
          freeMode: true
        },
        1200: {
            spaceBetween: 8,
            slidesPerView: 4,
            slidesPerGroup: 3,
            freeMode: true
        },
        1500: {
          spaceBetween: 8,
          slidesPerView: 5,
          slidesPerGroup: 3,
          freeMode: true
        },
        1700: {
            spaceBetween: 8,
            slidesPerView: 6,
            slidesPerGroup: 5,
            freeMode: true
        },
    },
  });


  var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 3,
    spaceBetween: 4,
    slidesPerGroup: 2,
    loop: true,
    loopFillGroupWithBlank: true,
    freeMode: true,
    // pagination: {
    //   el: ".swiper-pagination",
    //   clickable: true,
    // },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // when window width is >= 640px
        576: {
            spaceBetween: 4,
            slidesPerView: 3,
            slidesPerGroup: 2,
            freeMode: false
        },
        768: {
            spaceBetween: 4,
            slidesPerView: 4,
            slidesPerGroup: 3,
            freeMode: false
        },
        1200: {
            spaceBetween: 4,
            slidesPerView: 5,
            slidesPerGroup: 4,
            freeMode: false
        },
        1700: {
            spaceBetween: 4,
            slidesPerView: 6,
            slidesPerGroup: 4,
            freeMode: false
        },
    },
  });