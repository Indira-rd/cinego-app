// movieAPIs.js
import {
  createServer,
  Model,
} from "https://cdn.jsdelivr.net/npm/miragejs@0.1.48/+esm";

export default function movieAPIs() {
  createServer({
    models: {
      movie: Model,
    },

    seeds(server) {
      server.create("movie", {
        id: 1,
        title: "Inception",
        director: "Christopher Nolan",
        genre: "Sci-Fi",
        dateWatched: "2025-02-10", // YYYY-MM-DD
        review: "Mind-bending, great visuals.",
      });
      server.create("movie", {
        id: 2,
        title: "The Grand Budapest Hotel",
        director: "Wes Anderson",
        genre: "Comedy/Drama",
        dateWatched: "2024-12-05",
        review: "Whimsical style and stellar cast.",
      });
      server.create("movie", {
        id: 3,
        title: "Parasite",
        director: "Bong Joon-ho",
        genre: "Thriller",
        dateWatched: "2024-11-20",
        review: "Brilliant social commentary.",
      });
    },

    routes() {
      this.namespace = "/api";

      // GET /api/movies        → return all movies
      this.get("/movies", (schema) => {
        return schema.movies.all();
      });

      // POST /api/movies       → create a new movie
      this.post("/movies", (schema, request) => {
        const attrs = JSON.parse(request.requestBody);
        return schema.movies.create(attrs);
      });

      // GET /api/movies/:id    → return one movie
      this.get("/movies/:id", (schema, request) => {
        let id = request.params.id;
        return schema.movies.find(id);
      });

      // PUT /api/movies/:id    → update one movie
      this.put("/movies/:id", (schema, request) => {
        let id = request.params.id;
        let attrs = JSON.parse(request.requestBody);
        return schema.movies.find(id).update(attrs);
      });

      // DELETE /api/movies/:id → delete one movie
      this.delete("/movies/:id", (schema, request) => {
        let id = request.params.id;
        return schema.movies.find(id).destroy();
      });
    },
  });
}
