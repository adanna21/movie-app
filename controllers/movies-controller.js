const Movie = require('../models/Movie');

const movieController = {};

movieController.index = (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      res.json({
        message: 'ok',
        data: {movies},
      });
    }).catch(next)
};
