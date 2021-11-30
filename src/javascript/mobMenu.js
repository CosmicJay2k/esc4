export default function openMobileMenu() {
  const modal = document.querySelector(".modal");

  openMobMenu.addEventListener("click", function () {
    document.querySelector('.menu').setAttribute('class', 'mobMenu');
    modal.style.display = "block";
  })

  closeMobMenu.addEventListener("click", function () {
    modal.removeAttribute('style');
    document.querySelector('.mobMenu').setAttribute('class', 'menu');
  })

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  }
};