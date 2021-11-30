export default function openMobileMenu() {
  const modal = document.querySelector(".modal");

  openMobMenu.addEventListener("click", function () {
    modal.style.display = "block";
  })

  closeMobMenu.addEventListener("click", function () {
    modal.style.display = "none";
  })

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
};