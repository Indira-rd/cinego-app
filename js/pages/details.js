import { apiGetMovieDetails } from "../api/apiGetCinemaDetails.js";
import { apiDeleteMovie } from "../api/apiDeleteCinema.js";

function getId() {
  const id = Number(window.location.hash.replace("#", ""));
  return id;
}

function errorBanner(error) {
  return `<hgroup>
      <h2>Error Occured</h2>
      <p>${error.message}</p>
    </hgroup>`;
}

function getMovieDetails(movie) {
  return `<article>
        <header><h2>${movie.title}</h2></header>
        <p><strong>Director:</strong> ${movie.director}</p>
        <p><strong>Genre:</strong> ${movie.genre}</p>
        <p><strong>Date Watched:</strong> ${movie.dateWatched}</p>
        <p><strong>Review:</strong> ${movie.review}</p>
        <footer><button id="remove-btn" class="outline secondary">Remove</button></footer>
    </article>`;
}

async function movieDetailsPage() {
  const id = getId();

  const { error, data } = await apiGetMovieDetails(id);
  if (error) {
    return errorBanner(error);
  }
  return getMovieDetails(data);
}

function movieDeleteSuccess() {
  return `<hgroup>
        <h2>Movie Deleted</h2>
        <a href="/">Back to Movie List</a>
    </hgroup>`;
}
async function deleteMovie() {
  const id = getId();
  const { error } = await apiDeleteMovie(id);
  if (!error) {
    document.getElementById("app").innerHTML = movieDeleteSuccess();

    return;
  }
  document.getElementById("app").innerHTML = errorBanner(error);
}
export default async function render() {
  document.getElementById("app").innerHTML = await movieDetailsPage();

  const removeButtonElement = document.getElementById("remove-btn");
  removeButtonElement.addEventListener("click", deleteMovie);
}
