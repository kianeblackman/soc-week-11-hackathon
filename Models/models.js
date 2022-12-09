import { query } from '../db/index.js';

//GET all favourite movies
export async function getAllMovies() {
  const results = await query('SELECT * FROM favourites;');
  return results.rows;
}

//POST new favourite movie
export async function addFavMovie(body) {
  const result = await query(
    'INSERT INTO favourites(title, rated, releaseDate, genre, director, imdbRating) VALUES($1, $2, $3, $4, $5, $6) RETURNING *;',
    [
      body.title,
      body.rated,
      body.releaseDate,
      body.genre,
      body.director,
      body.imdbRating,
    ]
  );
  return result.rows[0];
}

//DELETE favourite movie
export async function deleteFavMovie(id) {
  const deletedMovie = await query(
    'DELETE FROM favourites WHERE id = $1 RETURNING *;',
    [id]
  );
  return deletedMovie.rows[0];
}
