import Inputmask from "inputmask";

// const inputMask = new Inputmask('+7 (999) 999-99-99');
// inputMask.mask(telSelector);

//input mask for tel inputs

const telInputs = document.querySelectorAll("input[type=tel]");
console.log(telInputs);

telInputs.forEach((input) => {
  const inputMask = new Inputmask("+38 (999) 999 99 99");
  inputMask.mask(input);
});
