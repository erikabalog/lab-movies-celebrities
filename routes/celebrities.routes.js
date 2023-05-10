// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here
router.get("/celebrities/create", (req, res, next) => {
    res.render("./celebrities/new-celebrity");
  });

  router.post("/celebrities/create", (req, res, next) => {
    console.log('req body pls', req.body)
    const { name, occupation, catchPhrase } = req.body;

    Celebrity.create({ name, occupation, catchPhrase })
    .then(response => {
        console.log('response create celebirty', response)

        res.redirect("/celebrities")
    })
    .catch(err => {
        console.log(err)

        res.render("celebrities/new-celebrity.hbs");

    }

        )
    res.render("celebrities/new-celebrity");
  });

  router.get("/celebrities", (req, res, next) => {
    Celebrity.find() //buscamos em nuestra base de datos 
    .then((results)=>{
      const celebrityResults= {results} //transform array in obj
      console.log(celebrityResults)
      return celebrityResults;

    })
    .then(celebResults=>{
      res.render("celebrities/celebrities", celebResults);
    })

    .catch(err=> {
      next(err)
    })
  })

   

module.exports = router;