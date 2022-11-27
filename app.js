let burgerOp = document.getElementsByClassName("burger-open")[0];
let burgerCl = document.getElementsByClassName("burger-close")[0];
let list = document.getElementsByClassName("list")[0];
let mask = document.getElementsByClassName("mask")[0];

burgerOp.addEventListener("click", () => {
  burgerOp.classList.toggle("burger-close");
  list.classList.toggle("list-mobile");
});
