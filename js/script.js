var swiper = new Swiper(".slide-content", {
    slidesPerView: 3,
    spaceBetween: 20,
    slidesPerGroup: 3,
    loop:true,
    centerSlide: 'true',
    transitionDuration: 500,
    speed:1500,
    ease: 'cubic-bezier(0.3, 0, 0.2, 1)',
    lazyLoading: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 10,
      },
      520: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 15,
      },
      950: {
        slidesPerView: 3,
        slidesPerGroup:3,
       
    }
    }

    
  });

