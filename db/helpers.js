import { query } from "./index.js";

export async function createTable() {
  return await query(`
    CREATE TABLE favourites (
      id SERIAL PRIMARY KEY,
      title TEXT,
      rated TEXT,
      releaseDate DATE,
      genre TEXT,
      director TEXT,
      imdbRating TEXT
    );`);
}

export async function dropTable() {
  return await query("DROP TABLE IF EXISTS favourites;");
}

export async function refillTable() {
  return await query(`
  INSERT INTO favourites
    (title,rated,releaseDate,genre,director,imdbRating)
  VALUES 
    ('Guardians of the Galaxy Vol. 2','PG-13','05 May 2017','Action','James Gunn','7.6'),
    ('The Fall','PG-13','03 October 2008','Adventure','Tarsem Singh','7.8');`);
}

export async function resetTable() {
  return [await dropTable(), await createTable(), await refillTable()];
}
