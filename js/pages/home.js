import { apiGetCinema } from "../api/apiGetCinema.js";

function errorBanner(error) {
  return `<hgroup>
    <h2>Error Occured</h2>
    <p>${error.message}</p>
  </hgroup>`;
}

function getMovieRow(movie) {
  return `<tr>
        <td>${movie.id}</td>
        <td>${movie.title}</td>
        <td>${movie["director"]}</td>
        <td>${movie["genre"]}</td>
        <td><a href="/movie#${movie.id}">View</a></td>
    </tr>`;
}
function getMovieWatchlist(data) {
  const movieRowsHtml = data.map(getMovieRow).join("");

  return `
        <h2>Movie Watchlist</h2>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Director</th>
                    <th>Genre</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                ${movieRowsHtml}
            </tbody>
        </table>
    `;
}
async function cinegoDashboard() {
  const { error, data } = await apiGetCinema();

  if (error) {
    return errorBanner(error);
  }
  const movieWatchlist = getMovieWatchlist(data);
  return movieWatchlist;
}

export default async function render() {
  document.getElementById("app").innerHTML = await cinegoDashboard();
}
