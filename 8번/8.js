const btn = document.querySelector(".up");

window.addEventListener("scroll", function () {
  if (scrollY >= 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
});

btn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
