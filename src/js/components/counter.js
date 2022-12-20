//counter
const counters = document.querySelectorAll(".counter");

if (document.querySelector(".counter")) {
  counters.forEach((counter) => {
    counter.addEventListener("click", (e) => {
      if (e.target.closest(".minus")) {
        const self = e.target;
        const btn = self.closest(".minus");
        const input = counter.querySelector("input");
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
        const btnMinus = counter.querySelector(".minus");
        const input = counter.querySelector("input");
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
}
