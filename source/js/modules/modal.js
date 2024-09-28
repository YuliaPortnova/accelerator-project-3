let onDocumentKeydown;

const openModal = (modal, closeButton) => {
  onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      closeButton.click();
    }
  };

  modal.scroll(0, 0);
  modal.classList.add('is-open');
  document.body.classList.add('page__modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

const closeModal = (modal) => {
  modal.classList.remove('is-open');
  document.body.classList.remove('page__modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
};

const createModal = (modal, openButton) => {
  const closeButton = modal.querySelector('.modal__close-button');

  const onCloseButtonClick = () => {
    closeModal(modal);
  };
  const onOpenButtonClick = () => {
    openModal(modal, closeButton);
  };
  const onModalClick = (event) => {
    if (!event.target.closest('.modal__content')) {
      closeModal(modal);
    }
  };

  openButton.addEventListener('click', onOpenButtonClick);
  closeButton.addEventListener('click', onCloseButtonClick);
  modal.addEventListener('click', onModalClick);
};

export { createModal };
