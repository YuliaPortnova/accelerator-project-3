import { createAccordions } from "../utils/accordions";

const CURRENT_TAB = 2;
const buttons = document.querySelectorAll('.faq__question');

const initFaq = () => {
  createAccordions(buttons);
  buttons[CURRENT_TAB].click();
};

export {initFaq};
