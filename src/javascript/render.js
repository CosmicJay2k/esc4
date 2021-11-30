export default function render(data) {
  const list = document.querySelector('.popList');

  const newItem = document.createElement('li');
  newItem.setAttribute('class', 'popCard');

  newItem.innerHTML = `
    <h2 class="title">${data.title} (${data.type})</h2>
    <div>
      <div>
        <p class="stars"></p>
        <p class="stars"></p>
        <p class="stars"></p>
        <p class="stars"></p>
        <p class="stars"></p>
        <p>${data.rating}</p>
      </div>
      <p class="players">${data.minParticipants} - ${data.maxParticipants} participants</p>
    </div>
    <p class="description">${data.description}</p>
    <div class="book">
      <a href="#">Book this room</a>
    </div>
  `

  list.appendChild(newItem);
}