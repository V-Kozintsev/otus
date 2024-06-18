const modalImg = document.querySelector(".modal-img");
const modalHidden = document.querySelector(".modal-hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const overlayHidden = document.querySelector(".overlay-hidden");
const body = document.querySelector("body");
const btnForm = document.querySelector(".btn-form");

modalImg.addEventListener("click", function () {
  overlay.classList.toggle("overlay-hidden");
  modal.classList.toggle("modal-hidden");
  body.style.overflowY = "hidden";
  modal.style.display = "flex";
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("overlay-hidden");
  modal.classList.toggle("modal-hidden");
  modal.style.display = "none";
  body.style.overflowY = "auto";
});

btnForm.addEventListener("click", () => {
  overlay.classList.toggle("overlay-hidden");
  modal.style.display = "none";
});
