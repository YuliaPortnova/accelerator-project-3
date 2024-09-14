import Swiper from 'swiper';
import {Pagination} from 'swiper/modules';
import 'swiper/css';

const innerButtons = document.querySelectorAll('.hero__link');

const heroSlider = new Swiper('.hero', {
  modules: [Pagination],
  pagination: {
    el: '.swiper-slide-active .hero__pagination',
    clickable: true,
    bulletElement: 'button type="button" aria-label="Кнопка переключения слайдов."',
  },
  watchOverflow: true,
  spaceBetween: 40,
  speed: 500,
  loop: true,
  lazy: true,
  lazyPreloadPrevNext: 3,
  preventClicks: true,
  autoHeight: true,

  breakpoints: {
    320: {
      allowTouchMove: true,
    },
    768: {
      allowTouchMove: true,
    },
    1440: {
      speed: 800,
      allowTouchMove: false,
    }
  },

  on: {
    slideChangeTransitionStart: (swiper) => {
      swiper.pagination.init();
      swiper.pagination.render();
      swiper.pagination.update();

      innerButtons.forEach((button) => {
        button.setAttribute('tabindex', '-1');
      });
      innerButtons[heroSlider.realIndex].setAttribute('tabindex', '0');
    },
  },
});
