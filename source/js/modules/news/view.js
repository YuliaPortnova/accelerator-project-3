import Swiper from 'swiper';
import { Navigation, Pagination, Grid } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';

const tabButtons = document.querySelectorAll('.news__tab');
const template = document.querySelector('#news-slide-template');
const container = document.querySelector('.news__slider-list');


const renderTabs = (currentTab) => {
  tabButtons.forEach((button) => {
    const isCurrent = (currentTab === button.dataset.topic);
    button.classList.toggle('is-current', isCurrent);
    if (isCurrent) {
      button.setAttribute('tabindex', '-1');
    } else {
      button.setAttribute('tabindex', '0');
    }
  });
};

const createSlides = (data) => data.map((properties) => {
  const { topic, date, title, text } = properties;
  const slide = template.content.querySelector('.news__slide').cloneNode(true);
  slide.classList.add(`news__slide--${topic}`);
  slide.querySelector('.news__slide-title').textContent = title;
  slide.querySelector('.news__slide-wrapper p').textContent = text;
  slide.querySelector('.news__date').textContent = `${date.day}/${date.month}/${date.year}`;
  slide.querySelector('.news__date').setAttribute('datetime', `${date.year}-${date.month}-${date.day}`);
  return slide;
});

const initNewsSlider = () => {
  new Swiper('.news__slider', {
    modules: [Navigation, Pagination, Grid],
    navigation: {
      nextEl: '.news__slider-buttons .swiper-button-next',
      prevEl: '.news__slider-buttons .swiper-button-prev',
    },
    pagination: {
      el: '.news__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let isNecessary = (index < 4)? true: false;
        return `<button class="${className}" type="button" aria-label="Показать страницу ${index + 1}." style="display: ${isNecessary?'inline-flex':'none'}">${index + 1}</button>`;
      },
    },
    speed: 300,
    spaceBetween: 20,
    lazy: true,
    lazyPreloadPrevNext: 1,
    preventClicks: true,
    grid: {
      rows: 2,
    },

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 1,
        slidesPerGroup: 1,
        grid: {
          rows: 2,
        },
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 30,
        grid: {
          rows: 2,
        },
      },
      1440: {
        slidesPerView: 'auto',
        slidesPerGroup: 3,
        allowTouchMove: false,
        spaceBetween: 32,
        grid: {
          rows: 1,
        },
      }
    },

    on: {
      afterInit: (swiper) => {
        const paginationBullets = swiper.pagination.bullets;
        paginationBullets.forEach((paginationBullet, activeIndex) => {
          paginationBullet.addEventListener('click', () => {

            paginationBullets.forEach((paginationBullet, currentIndex) => {
              let isNecessary = false;
              if ( activeIndex <= (currentIndex + 2)  ) {
                isNecessary = true;
              }
              if ( currentIndex > activeIndex + 1) {
                isNecessary = false;
              }
              if ( activeIndex <= 2 && currentIndex <= 3) {
                isNecessary = true;
              }
              if ( activeIndex === (paginationBullets.length - 1) && currentIndex === (paginationBullets.length - 4)) {
                isNecessary = true;
              }

              paginationBullet.style.display = isNecessary? 'inline-flex': 'none';
            })
          });
        });
      },

      realIndexChange: (swiper) => {
        swiper.pagination.bullets.forEach((bullet) => {
          if (bullet.classList.contains('swiper-pagination-bullet-active')) {
            bullet.click();
          };
        });
      }
    },
  });
};

const renderSlides = (data) => {
  container.innerHTML = '';
  container.append(...createSlides(data));
  initNewsSlider();
};

export { renderTabs, renderSlides };
