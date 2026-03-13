// apiGetMovies.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetCinema = async () => {
  try {
    const { data } = await axios.get("/api/movies");
    // Mirage returns { movies: [ … ] }
    return { error: null, data: data.movies };
  } catch (err) {
    return { error: err, data: null };
  }
};
