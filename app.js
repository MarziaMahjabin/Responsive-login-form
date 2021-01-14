let sign_up_btn = document.querySelector("#sign-up-btn");
let sign_in_btn = document.querySelector("#sign-in-btn");
let container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode")
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode")
});
