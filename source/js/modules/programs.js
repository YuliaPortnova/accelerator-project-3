import Swiper from 'swiper';
import {Navigation, Scrollbar} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';

const innerButtons = document.querySelectorAll('.programs__slide-link');

const initProgramsSlider = () => {
  const programsSlider = new Swiper('.programs__slider', {
    modules: [Navigation, Scrollbar],
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: '.programs__slider-buttons .swiper-button-next',
      prevEl: '.programs__slider-buttons .swiper-button-prev',
    },
    watchOverflow: true,
    spaceBetween: 30,
    lazy: true,
    lazyPreloadPrevNext: 1,
    preventClicks: true,

    breakpoints: {
      320: {
        allowTouchMove: true,
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 32,
        allowTouchMove: false,
      }
    },

    on: {
      realIndexChange: () => {
        innerButtons.forEach((button) => {
          button.setAttribute('tabindex', '-1');
        });
        innerButtons[programsSlider.realIndex].setAttribute('tabindex', '0');
      },
    },
  });
}

export { initProgramsSlider };
