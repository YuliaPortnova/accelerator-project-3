import './modules/hero-slider.js';
import {initHeader} from './modules/header.js';
import {createModal} from './modules/modal.js';
import { initProgramsSlider } from './modules/programs.js';
import { initNews } from './modules/news/control.js';
import { newsData } from './newsData.js';
import { initFaq } from './modules/faq.js';
import {initReviewsSlider} from './modules/reviews.js';

const modalFeedback = document.querySelector('.modal--feedback');
const feedbackOpenButton = document.querySelector('.about__button');

initHeader();
createModal(modalFeedback, feedbackOpenButton);
initProgramsSlider();
initNews(newsData);
initFaq();
initReviewsSlider();
