class Modal {
  constructor(modalContainer, modalOpen) {
    this.modalContainer = document.querySelector(modalContainer);
    this.modalOpen = document.querySelectorAll(modalOpen);
    this.modalClose = document.querySelectorAll("[data-modal-close]");
    this.modalWrapper = this.modalContainer.querySelector(".modal__wrapper");
  }

  renderModal() {
    const lockMarginValue =
      window.innerWidth -
      document.querySelector(".site-container").offsetWidth +
      "px";

    const openModal = () => {
      this.modalContainer.classList.add("modal__active");
      document.body.classList.add("locked");
      pageMarginAdd();
    };

    const closeModal = () => {
      this.modalContainer.classList.remove("modal__active");
      document.body.classList.remove("locked");
      pageMarginRemove();
    };

    const pageMarginAdd = () => {
      document.body.style.marginRight = lockMarginValue;
      document.querySelector("header").style.paddingRight = lockMarginValue;
    };

    const pageMarginRemove = () => {
      document.body.style.marginRight = null;
      document.querySelector("header").style.paddingRight = null;
    };

    this.modalOpen.forEach((e) => {
      e.addEventListener("click", openModal);
    });

    this.modalClose.forEach((e) => {
      e.addEventListener("click", closeModal);
    });

    this.modalContainer.addEventListener("click", (e) => {
      if (e.target == this.modalWrapper) {
        closeModal();
      }
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.code == "Escape" &&
        this.modalContainer.classList.contains("modal__active")
      ) {
        closeModal();
      }
    });
  }
}

export default Modal;
