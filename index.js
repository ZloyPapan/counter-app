let add = document.querySelector(".add");
let reset = document.querySelector(".reset");
let counterText = document.querySelector(".counter");
let counter = 10;

add.addEventListener("click", function () {
  counter = counter - 1;

  counterText.innerText = counter;
});

reset.addEventListener("click", function () {
  counter = 10

  counterText.innerText = counter;
});
