import render from "./render.js";

export function topThree (data) {
  const dataSorted = data.sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating));
  for (let i = 0; i < 3; i++){
    render(dataSorted[i]);
  }
}

export function allChallenges (data) {
  data.forEach(data => {
    render(data);
  })
}