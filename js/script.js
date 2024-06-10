const modalImg = document.querySelector(".modal-img");
const modalHidden = document.querySelector(".modal-hidden");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const overlayHidden = document.querySelector(".overlay-hidden");
const body = document.querySelector("body");

modalImg.addEventListener("click", function () {
  overlay.classList.toggle("overlay-hidden");
  modal.classList.toggle("modal-hidden");
  body.style.overflowY = "hidden";
});

overlay.addEventListener("click", function () {
  overlay.classList.toggle("overlay-hidden");
  modal.classList.toggle("modal-hidden");
  body.style.overflowY = "auto";
});
