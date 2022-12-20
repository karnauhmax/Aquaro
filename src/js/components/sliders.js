import { Splide } from "@splidejs/splide";

// reviews slider

if (document.querySelector(".reviews__slider")) {
  const reviewSlider = new Splide(".reviews__slider", {
    perPage: 3,
    perMove: 1,
    gap: "1rem",
    arrows: false,
    pagination: false,
    type: "loop",
    breakpoints: {
      991: {
        perPage: 1,
        padding: {
          right: "200px",
        },
      },

      767: {
        padding: {
          right: "0px",
        },
      },
    },
  });

  reviewSlider.mount();
}

if (document.querySelector(".reviews__specs-slider")) {
  const reviewSlider = new Splide(".reviews__specs-slider", {
    perPage: 2,
    perMove: 1,
    gap: "1rem",
    arrows: false,
    pagination: false,
    type: "loop",
    breakpoints: {
      991: {
        perPage: 1,
        padding: {
          right: "200px",
        },
      },

      767: {
        padding: {
          right: "0px",
        },
      },
    },
  });

  reviewSlider.mount();
}

// product slider

if (document.querySelector(".product__slider")) {
  const thumbnailSlider = new Splide(".product__thumbnail-slider", {
    fixedWidth: 70,
    fixedHeight: 60,
    direction: "ttb",
    isNavigation: true,
    height: "100%",
    pagination: false,
    cover: true,
    focus: "center",
    gap: "1.25rem",
    arrows: false,
    drag: false,
    breakpoints: {
      991: {
        direction: "rtl",
      },

      767: {
        gap: "0.625rem",
      },

      576: {
        width: 300,
      },

      375: {
        width: 250,
      },
    },
  });

  const mainProductSlider = new Splide(".product__main-slider", {
    arrows: false,
    pagination: false,
  });

  mainProductSlider.sync(thumbnailSlider).mount();
  thumbnailSlider.mount();
}
