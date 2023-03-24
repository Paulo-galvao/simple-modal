const openBtn = document.getElementById("open-btn");
const closeBtn = document.getElementById("close-btn");
const modal = document.querySelector(".hidden-modal");

openBtn.addEventListener("click", () => {
    modal.classList.add("total-modal");
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("total-modal");
});