//counter
const itemsCollection = document.querySelectorAll(".cart__item");
const counterItems = document.querySelectorAll(".cart__quantity");

counterItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    const self = e.currentTarget;
    const target = e.target;
    self.closest(".cart__item").preventDefault();
  });
});

itemsCollection.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.closest(".minus")) {
      const self = e.target;
      const btn = self.closest(".minus");
      const input = self.closest(".cart__item-quantity").querySelector("input");
      if (input) {
        let value = parseInt(input.value);
        value > 2
          ? (value -= 1)
          : ((value = 1), btn.classList.remove("active"));
        input.value = value;
      }
    }

    if (e.target.closest(".plus")) {
      const self = e.target;
      const btn = self.closest(".plus");
      const btnMinus = self
        .closest(".cart__item-quantity")
        .querySelector(".minus");
      const input = self.closest(".cart__item-quantity").querySelector("input");
      if (input) {
        let value = parseInt(input.value);
        value < 100
          ? ((value += 1), btnMinus.classList.add("active"))
          : ((value = 100), btn.classList.remove("active"));
        input.value = value;
      }
    }
  });
});
