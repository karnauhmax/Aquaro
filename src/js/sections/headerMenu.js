const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll("[data-goto]");
const header = document.querySelector(".header");

//opening sub menu by click
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

//scroll to links

if (menuLinks.length > 0) {
  menuLinks.forEach((menuLinks) => {
    menuLinks.addEventListener("click", (e) => {
      const menuLink = e.target;
      if (menu.classList.contains("menu--active")) {
        menu.classList.remove("menu--active");
        document.body.classList.remove("dis-scroll");
        document
          .querySelector(".header__burger")
          .classList.remove("burger--active");
      }
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector(".header").offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: "smooth",
        });

        e.preventDefault();
      }
    });
  });
}

//fixed header

if (header) {
  const menuObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      console.log(entry.intersectionRatio);
      if (entry.intersectionRatio <= 0.1) {
        entry.target.classList.add("fixed");
      }
    });
  }, {});

  menuObserver.observe(header);
}
