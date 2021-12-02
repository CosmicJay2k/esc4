import { setStarsInRating } from "./renderStars.js";

export default function render(data, idOfCard) {
  const list = document.querySelector('.challenges-list');

  const newItem = document.createElement('li');
  newItem.setAttribute("id", "id" + idOfCard);
  newItem.setAttribute('class', 'card');

  data.labels.forEach(label => newItem.classList.add(`${label}`));

  newItem.innerHTML = `
    <div class="img-container">
      <img src="${data.image}"/>
    </div>
    <div class="text-container">
      <h2 class="title">${data.title} (${data.type})</h2>
      <div>
        <ul class="rating-stars">
          <li>&#9733;</li>
          <li>&#9733;</li>
          <li>&#9733;</li>
          <li>&#9733;</li>
          <li>&#9733;</li>
        </ul>
        <p class="players">${data.minParticipants} - ${data.maxParticipants} participants</p>
      </div>
      <p class="description">${data.description}</p>
      <div class="book-container">
        <a href="#">Book this room</a>
      </div>
    </div>
  `;
  
  list.appendChild(newItem);
  setStarsInRating(idOfCard, data.rating);
}