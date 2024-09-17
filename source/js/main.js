import './modules/hero-slider.js';
import {initHeader} from './modules/header.js';
import {createModal} from './modules/modal.js';

const modalFeedback = document.querySelector('.modal--feedback');
const feedbackOpenButton = document.querySelector('.about__button');

initHeader();
createModal(modalFeedback, feedbackOpenButton);
