import render from "./render.js";

export function topThree (data) {
  const dataSorted = data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  let idOfCard = 0;
  for (let i = 0; i < 3; i++){
    render(dataSorted[i], idOfCard);
    idOfCard++;
  }
}

export function allChallenges (data) {
  let idOfCard = 0;
  data.forEach(data => {
    render(data, idOfCard);
    idOfCard++;
  })
}