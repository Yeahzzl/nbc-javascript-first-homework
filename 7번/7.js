const number = document.querySelector("div");

let count = Number(number.textContent);
const intervalNumber = setInterval(() => {
  if (count < 10) {
    count = count + 1;
    number.innerHTML = count;
  } else {
    number.style.display = "none";
    clearInterval(intervalNumber);
  }
}, 1000);
