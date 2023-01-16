class Tab {
  constructor(tabContainer) {
    this.tabContainer = document.querySelector(tabContainer);
    this.tabBtn = this.tabContainer.querySelectorAll(".tabs__btn");
    this.tabContent = this.tabContainer.querySelectorAll(".tabs__content");
  }

  renderTab() {
    this.tabContainer.addEventListener("click", (e) => {
      if (e.target.classList.contains("tabs__btn")) {
        let self = e.target;
        let tabsPath = e.target.dataset.tabsPath;

        const tabsHandler = (path) => {
          this.tabBtn.forEach((btn) => {
            btn.classList.remove("tabs__btn-active");
          });

          this.tabContent.forEach((btn) => {
            btn.classList.remove("tabs__content-active");
          });

          this.tabContainer
            .querySelector(`[data-tabs-path=${path}]`)
            .classList.add("tabs__btn-active");
          this.tabContainer
            .querySelector(`[data-tabs-target=${path}]`)
            .classList.add("tabs__content-active");
        };

        tabsHandler(tabsPath);
      }
    });
  }
}

export default Tab;
