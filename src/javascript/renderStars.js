export function setStarsInRating(idOfCard, ratingValue) {
  const starsItems = document.querySelectorAll(`#id${idOfCard} .rating-stars li`);
  let ratingNumber = ratingValue;

  for (let index = 0; index < ratingNumber; index++) {
    starsItems[index].classList.add('checked')
  }
};