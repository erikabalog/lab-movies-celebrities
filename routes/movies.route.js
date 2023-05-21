// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Movienpm run dev.model");

const Movies = require("../models/Movies.model.js");

//GET movies
router.get("/movies", (req, res, next) => {
  Movie.find()
    .then((allMovies) => {
      res.render("movies/movies", { movies: allMovies });
    })
    .catch((error) => {
      console.log("Error while getting the movies from the DB: ", error);
      next(error);
    });
});

//GET movie create
router.get("/movies/create", (req, res, next) => {
      res.render("/movies/new-movie");
});

//GET movie/:id
router.get("/movies/:id", (req, res, next) => {
  Movie.findById(id)
    .then((theMovie) => {
      res.render("movies/movie-dettails.hbs", { movie: theMovie });
    })
    .catch((err) => next(err));
});

// //GET movie/:id/edit
// router.get("/movies/:id/edit", (req, res, next)=>{
//     Movie.findById(id)
//     .then((movieEdit)=>{
//         res.render("movies/edit-movie.hbs", {movie: movieEdit})
//     })
//     .catch((err) => next(err));
// })

//POST /movie/create
router.post("/movies/create", (req, res, next) => {
  const { title, genre, plot, cast } = req.body;
  Movies.create(req.body)
    .then((result) => {
      res.redirect("/movies");
    })
    .catch((err) => next(err));
});
