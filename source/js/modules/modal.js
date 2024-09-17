const closeModal = () => {
  modal.classList.remove('.is-open');
}

const onModalCloseButtonClick = () => {
  closeModal();
};

const createModal = (modal, openButton) => {
  const modalCloseButton = modal.querySelector('.modal__close-button');

  openButton.addEventListener('click', () => {
    modal.classList.add('.is-open');
  });

  modalCloseButton.addEventListener('click', onModalCloseButtonClick);
};

export { createModal };
