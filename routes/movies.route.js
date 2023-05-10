// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

const Movies= require("../models/Movies.model");

router.get("/movies/create", (req, res, next)=>{
    Celebrity.find()
    .then(celebrityDb=>{
        res.render("/movies/new-movie", {celebrityDb});
    })
    .catch(err=> next(err));
})

router.post("/movies/create", (req,res,next)=> {
    Movies.create(req.body)
    .then(result=> {
        res.redirect("/movies")
    })
    .catch(err=> {
        res.render("/movies/new-movie")
    })
})