const modal = document.querySelector(".modal");

openMobMenu.addEventListener("click", function () {
  modal.style.display = "block";
  /*document.querySelector(".container").style.opacity = "50%";*/
})

closeMobMenu.addEventListener("click", function () {
  modal.style.display = "none";
  /*document.querySelector(".container").style.opacity = "100%";*/
})

window.onclick = function (e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}