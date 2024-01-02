const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnShowModal = document.querySelector(".show-modal");

const openModal = () => {
  modal.classList.remove("hidden");
  btnShowModal.setAttribute("aria-expanded", "true");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  btnShowModal.setAttribute("aria-expanded", "false");
  overlay.classList.add("hidden");
};

btnShowModal.addEventListener("click", openModal);
btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
