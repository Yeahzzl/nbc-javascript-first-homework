const number = document.querySelectorAll(".number");

function result() {
  for (let i = 0; i < number.length; i++) {
    // number[i] + 10;
    const num = +number[i].innerText + 10;
    number[i].innerText = num;
  }
}
result();
