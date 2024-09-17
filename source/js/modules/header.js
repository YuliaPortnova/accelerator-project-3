import { createAccordions } from "../utils/accordions.js";

const header = document.querySelector('.header');
const openButton = header.querySelector('.header__menu-button');
const list = header.querySelector('.header__menu-list');
const accordionButtons = header.querySelectorAll('.header__list-button');

const LIST_PADDING = 70;
const SUBLIST_PADDING = 100;

const onHeaderClick = (event) => {
  if(!event.target.closest('.header__menu')) {
    openButton.click();
  }
}

const onButtonClick = () => {
  list.style.maxHeight = `${list.scrollHeight + LIST_PADDING + SUBLIST_PADDING}px`;
}

const initHeader = () => {
  openButton.addEventListener('click', () => {
    const isOpen = header.classList.contains('is-open');
    if (isOpen) {
      list.style.maxHeight = 0;
      header.classList.remove('is-open');
      openButton.classList.remove('button--blue-background');
      header.removeEventListener('click', onHeaderClick);
      accordionButtons.forEach((button)=> {
        button.removeEventListener('click', onButtonClick);
      });
    } else {
      list.style.maxHeight = `${list.scrollHeight + LIST_PADDING}px`;
      header.classList.add('is-open');
      openButton.classList.add('button--blue-background');
      header.addEventListener('click', onHeaderClick);
      accordionButtons.forEach((button)=> {
        button.addEventListener('click', onButtonClick);
      })
    }
  });

  createAccordions(accordionButtons);
};

export { initHeader } ;