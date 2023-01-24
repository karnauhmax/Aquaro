const menu = document.querySelector('.menu');
const menuLinks = document.querySelectorAll('[data-goto]');
const header = document.querySelector('.header');

//opening sub menu by click
if (menu) {
  document.addEventListener('click', e => {
    const self = e.target;
    const subMenu = self.parentElement.querySelector('.sub-menu');
    if (
      self.closest('.menu__item') &&
      self.closest('.menu__item').querySelector('.sub-menu')
    ) {
      e.preventDefault();
      const item = self.closest('.menu__item');

      if (subMenu) {
        item.classList.toggle('sub-menu__active');
      }
    } else {
      if (document.querySelector('.sub-menu__active')) {
        const subMenusCollection =
          document.querySelectorAll('.sub-menu__active');
        subMenusCollection.forEach(item => {
          item.classList.remove('sub-menu__active');
        });
      }
    }
  });
}

//scroll to links

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLinks => {
    menuLinks.addEventListener('click', e => {
      const menuLink = e.target;
      if (menu.classList.contains('menu--active')) {
        menu.classList.remove('menu--active');
        document.body.classList.remove('dis-scroll');
        document
          .querySelector('.header__burger')
          .classList.remove('burger--active');
      }
      if (
        menuLink.dataset.goto &&
        document.querySelector(menuLink.dataset.goto)
      ) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue =
          gotoBlock.getBoundingClientRect().top +
          pageYOffset -
          document.querySelector('.header').offsetHeight;

        window.scrollTo({
          top: gotoBlockValue,
          behavior: 'smooth'
        });

        e.preventDefault();
      }
    });
  });
}

//fixed header

if (header) {
  const menuObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.intersectionRatio <= 0.1) {
        entry.target.classList.add('fixed');
      }
    });
  }, {});

  menuObserver.observe(header);
}

//cutting cart amount

let amount = document.querySelector('.cart__amount').textContent;

if (amount.trim().length > 2) {
  const cutted = `${amount.textContent.substring(0, 2)}+`;
  amount.innerText = cutted;
}
