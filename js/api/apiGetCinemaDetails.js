// apiGetMovieDetails.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiGetMovieDetails = async (id) => {
  try {
    const { data } = await axios.get(`/api/movies/${id}`);
    // Mirage returns { movie: { … } }
    return { error: null, data: data.movie };
  } catch (err) {
    return { error: err, data: null };
  }
};
