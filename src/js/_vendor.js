import "./vendor/focus-visible.js";

const sequenceSum = (begin, end, step) => {
  let result = 0;

  for (let i = begin; i <= end; i += step) {
    result += i;
  }

  return result;
};

console.log(sequenceSum(1, 5, 1));

const getGrade = (s1, s2, s3) => {
  let avg = Math.round((s1 + s2 + s3) / 3);

  return avg >= 90
    ? "A"
    : avg >= 80
    ? "B"
    : avg >= 70
    ? "C"
    : avg >= 60
    ? "D"
    : "F";
};

console.log(getGrade(95, 90, 93));

const fakeBin = (str) => {
  return str
    .split("")
    .map((el) => (parseInt(el) >= 5 ? (el = "1") : (el = "0")))
    .join("");
};

console.log(fakeBin("45385593107843568"));
