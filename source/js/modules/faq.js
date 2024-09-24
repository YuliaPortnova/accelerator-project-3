import { createAccordions } from "../utils/accordions";

const buttons = document.querySelectorAll('.faq__question');

const initFaq = () => {
  createAccordions(buttons);
};

export {initFaq};
