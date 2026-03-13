import { apiAddCinema } from "../api/apiAddCinema.js";

function loadAddCinemaPage() {
  return `
        <h2>What movie did you watch recently?</h2>
        <form id="add-cinema-form">
            <input id="title" placeholder="Title" required type="text" />
            <input type="text" id="director" placeholder="Director" required />
            <select id="genre">
                <option value="" disabled selected>Genre</option>
                <option>Action</option>
                <option>Comedy</option>
                <option>Drama</option>
                <option>Thriller</option>
                <option>Sci-Fi</option>
                <option>Documentary</option>
                <option>Other</option>
            </select>
            <input type="datetime-local" id="date" />
            <textarea rows="3" placeholder="Your Review" id="review"></textarea>
            <button type="submit">Add Moview</button>
        </form>
        <div><p id="msg"></p></div>
    `;
}

async function addMovie(event) {
  event.preventDefault();
  const formElement = document.getElementById("add-cinema-form");

  const payload = {
    title: document.getElementById("title").value,
    director: document.getElementById("director").value,
    genre: document.getElementById("genre").value,
    dateWatched: document.getElementById("date").value.split("T")[0],
    review: document.getElementById("review").value,
  };

  const { error } = await apiAddCinema(payload);

  const messageElement = document.getElementById("msg");
  if (error) {
    messageElement.innerText = "❌ Error occured while adding movie details.";
    messageElement.style.color = "red";
    return;
  }
  messageElement.innerText = "✅ Movie added successfully.";
  formElement.reset();
}
export default function render() {
  document.getElementById("app").innerHTML = loadAddCinemaPage();

  const formElement = document.getElementById("add-cinema-form");

  formElement.addEventListener("submit", addMovie);
}
