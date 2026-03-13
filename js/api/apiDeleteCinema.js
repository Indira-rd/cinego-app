// apiDeleteMovie.js
import axios from "https://cdn.jsdelivr.net/npm/axios@1.9.0/+esm";

export const apiDeleteMovie = async (id) => {
  try {
    await axios.delete(`/api/movies/${id}`);
    return { error: null };
  } catch (err) {
    return { error: err };
  }
};
