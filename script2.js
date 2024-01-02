const openButton = document.querySelector("[data-open-modal]");
const dialog = document.getElementById("dialog");
const closeButton = document.getElementById("close-dialog");

openButton.addEventListener("click", () => {
  dialog.showModal();
  closeButton.focus();
});

closeButton.addEventListener("click", () => {
  dialog.close();
});
