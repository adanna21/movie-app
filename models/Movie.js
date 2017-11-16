const db = require('../db/config');

const Movie = {};

Movie.findAll = () => {
  return db.query('SELECT * FROM movies');
}

Movie.findById = (id) => {
  return db.oneOrNone(`
    SELECT * FROM movies
    WHERE id = $1
    `, [id]);
}

Movie.create = (movie, userId) => {
  return db.one(`
    INSERT INTO movies
    (title, description, genre, user_id)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `, [movie.title, movie.description, movie.genre, userId]);
}
