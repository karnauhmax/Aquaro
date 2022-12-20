class Tab {
  constructor(tabContainer) {
    this.tabContainer = document.querySelector(tabContainer);
    this.tabBtn = this.tabContainer.querySelectorAll(".tabs__btn");
    this.tabContent = this.tabContainer.querySelectorAll(".tabs__content");
  }

  renderTab() {
    this.tabContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        const self = e.target;
        const tabsPath = self.dataset.tabsPath;
        const tabsHandler = (path) => {
          this.tabBtn.forEach((button) => {
            button.classList.remove("tabs__btn-active");
          });

          if (path) {
            document
              .querySelector(`[data-tabs-path=${path}]`)
              .classList.add("tabs__btn-active");
          }

          this.tabContent.forEach((content) => {
            content.classList.remove("tabs__content-active");
          });

          if (path) {
            document
              .querySelector(`[data-tabs-target=${path}]`)
              .classList.add("tabs__content-active");
          }
        };

        tabsHandler(tabsPath);
      }
    });
  }
}

export default Tab;
