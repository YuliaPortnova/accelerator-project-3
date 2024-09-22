import Swiper from 'swiper';
import {Navigation, Pagination, Grid} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';

const tabButtons = document.querySelectorAll('.news__tab');
const template = document.querySelector('#news-slide-template');
const container = document.querySelector('.news__slider-list');


const renderTabs = (currentTab) => {
  tabButtons.forEach((button) => {
    button.classList.toggle('is-current', currentTab == button.dataset.topic);
  })
};

const createSlides = (data) => data.map((properties) => {
  const {topic, date, title, text} = properties;
  const slide = template.content.querySelector('.news__slide').cloneNode(true);
  slide.classList.add(`news__slide--${topic}`);
  slide.querySelector('.news__slide-title').textContent = title;
  slide.querySelector('.news__slide-wrapper p').textContent = text;
  slide.querySelector('.news__date').textContent = `${date.day}/${date.month}/${date.year}`;
  slide.querySelector('.news__date').setAttribute('datetime', `${date.year}-${date.month}-${date.day}`);
  return slide;
});

const initNewsSlider = () => {
  const newsSlider = new Swiper('.news__slider', {
    modules: [Navigation, Pagination, Grid],
    navigation: {
      nextEl: '.news__slider-buttons .swiper-button-next',
      prevEl: '.news__slider-buttons .swiper-button-prev',
    },
    watchOverflow: true,
    spaceBetween: 30,
    lazy: true,
    lazyPreloadPrevNext: 1,
    preventClicks: true,
    grid: {
      rows: 2,
    },

    breakpoints: {
      320: {
        allowTouchMove: true,
        slidesPerView: 'auto',
      },
      768: {
        allowTouchMove: true,
        slidesPerView: 4,
      },
      1440: {
        slidesPerView: 3,
        allowTouchMove: false,
      }
    },
  });
}

const renderSlides = (data) => {
  container.innerHTML = '';
  container.append(...createSlides(data));
  initNewsSlider();
};

export { renderTabs, renderSlides };
