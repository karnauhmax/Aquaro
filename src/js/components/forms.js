import Inputmask from "inputmask";

const telInputs = document.querySelectorAll("input[type=tel]");

if (telInputs) {
  telInputs.forEach((input) => {
    const inputMask = new Inputmask("+38 (999) 999 99 99");
    if (input) {
      inputMask.mask(input);
    }
  });
}
