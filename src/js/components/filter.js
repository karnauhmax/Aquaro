const filter = document.querySelector(".filter");
const filterItems = document.querySelectorAll(".filter__item");

if (filter) {
  filter.addEventListener("click", (e) => {
    if (e.target.closest(".filter__item")) {
      const target = e.target;
      const parent = e.currentTarget;
      const item = target.closest(".filter__item");
      const currentTitle = item.querySelector(".filter__title");
      const allTitles = parent.querySelectorAll(".filter__title");
      const currentDetails = item.querySelector(".filter__details");
      const allDetails = parent.querySelectorAll(".filter__details");
      allDetails.forEach((item) => {
        item.classList.remove("active");
      });

      allTitles.forEach((title) => {
        title.classList.remove("active");
      });

      if (currentDetails) {
        currentDetails.classList.add("active");
      }
      currentTitle.classList.add("active");
    }
  });
}
