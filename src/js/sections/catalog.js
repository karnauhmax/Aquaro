//filter

const filter = document.querySelector(".filter");
const filterItems = document.querySelectorAll(".filter__item");

if (filter) {
  filter.addEventListener("click", (e) => {
    const target = e.target;
    const item = target.closest(".filter__item");
    const title = item.querySelector(".filter__title");
    const details = item.querySelector(".filter__details");
  });
}
