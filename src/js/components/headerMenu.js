const menu = document.querySelector(".menu");

if (menu) {
  document.addEventListener("click", (e) => {
    e.preventDefault();
    const self = e.target;
    const subMenu = self.parentElement.querySelector(".sub-menu");
    const arrow = self.parentElement.querySelector(".menu__arrow");
    if (self.closest(".menu__item")) {
      if (subMenu) {
        subMenu.classList.toggle("active");
        arrow.classList.toggle("active");
      }
    } else {
      if (subMenu) {
        console.log(self);
        subMenu.classList.remove("active");
        arrow.classList.remove("active");
      }
    }
  });
}
