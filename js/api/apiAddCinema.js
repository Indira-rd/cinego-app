// apiAddMovie.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiAddCinema = async (newMovie) => {
  try {
    const { data } = await axios.post("/api/movies", newMovie);
    // Mirage returns { movie: { … } }
    return { error: null, data: data.movie };
  } catch (err) {
    return { error: err, data: null };
  }
};
