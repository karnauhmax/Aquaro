import { Splide } from "@splidejs/splide";

// const mainSlider = new Splide(".main-slider", {
//   // type: "fade",
//   rewind: true,
//   pagination: false,
//   arrows: false,
// });

// const thumbnails = new Splide(".second-slider", {
//   direction: "ttb",
//   fixedWidth: 400,
//   perPage: 4,
//   height: "100%",
//   gap: 10,
//   rewind: true,
//   pagination: false,
//   perMove: 1,
//   focus: "center",
//   isNavigation: true,
//   breakpoints: {
//     600: {
//       fixedWidth: 60,
//       fixedHeight: 44,
//     },
//   },
// });

// mainSlider.sync(thumbnails);
// mainSlider.mount();
// thumbnails.mount();

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
