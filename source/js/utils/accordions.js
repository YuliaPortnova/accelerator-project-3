const createAccordions = (buttons) => {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('is-active');

      const clickedDescription = button.nextElementSibling;
      const isActive = button.classList.contains('is-active');
      clickedDescription.style.maxHeight = isActive ? `${clickedDescription.scrollHeight}px` : 0;
    });
  });
};

export { createAccordions };
