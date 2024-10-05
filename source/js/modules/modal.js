let onDocumentKeydown;
let onDocumentFocus;

const openModal = (modal, closeButton) => {
  onDocumentKeydown = (event) => {
    if (event.key.startsWith('Esc')) {
      closeButton.click();
    }
  };
  onDocumentFocus = (event) => {
    if (!modal.contains(event.target)) {
      closeButton.click();
    }
  };

  modal.scroll(0, 0);
  modal.classList.add('is-open');
  document.body.classList.add('page__modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
  document.addEventListener('focus', onDocumentFocus, true);
};

const closeModal = (modal) => {
  modal.classList.remove('is-open');
  document.body.classList.remove('page__modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('focus', onDocumentFocus, true);
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

  const onModalSubmit = () => {
    closeButton.click();
  };

  openButton.addEventListener('click', onOpenButtonClick);
  closeButton.addEventListener('click', onCloseButtonClick);
  modal.addEventListener('click', onModalClick);
  modal.addEventListener('submit', onModalSubmit);
};

export { createModal };
