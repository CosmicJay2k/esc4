openMobMenu.addEventListener("click", function () {
  document.querySelector(".menuBox").style.display = "flex";
  document.querySelector(".container").style.opacity = "50%";
})

closeMobMenu.addEventListener("click", function () {
  document.querySelector(".menuBox").style.display = "none";
  document.querySelector(".container").style.opacity = "100%";
})