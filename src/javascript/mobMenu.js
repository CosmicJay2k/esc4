export default function openMobileMenu() {
  const modal = document.querySelector(".modal");

  openMobMenu.addEventListener("click", function () {
    document.querySelector('#menuList').setAttribute('class', 'mobile-menu');
    modal.style.display = "block";
    document.querySelector('.open-container').style.display = 'none';
  })

  closeMobMenu.addEventListener("click", function () {
    modal.removeAttribute('style');
    document.querySelector('.open-container').removeAttribute('style');
  })

  window.onclick = function (e) {
    if (e.target == modal) {
      modal.removeAttribute('style');
      document.querySelector('.open-container').removeAttribute('style');
    }
  }

  window.onresize = function () {
    if (window.innerWidth > 768)
      document.querySelector('#menuList').setAttribute('class', 'menu-list-container');
    else
      document.querySelector('#menuList').setAttribute('class', 'mobile-menu');
  }
};