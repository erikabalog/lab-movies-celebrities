// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();
const Celebrity = require("../models/Celebrity.model");

// all your routes here

//GET celebrities create
router.get("/celebrities/create", (req, res, next) => {
  res.render("./celebrities/new-celebrity");
});

//POST celebrities create
router.post("/celebrities/create", (req, res, next) => {
  console.log("req body pls", req.body);
  const { name, occupation, catchPhrase } = req.body;

  Celebrity.create({ name, occupation, catchPhrase })
    .then((response) => {
      //Celebrity from DB
      console.log("response create celebirty", response);
      res.redirect("/celebrities");
    })
    .catch((err) => {
      console.log(err);
      res.render("celebrities/new-celebrity.hbs");
    });
  res.render("celebrities/new-celebrity");
});

//GET celebrities
router.get("/celebrities", (req, res, next) => {
  Celebrity.find() //retrive all celebrities
    .then((results) => {
      const celebrityResults = { results }; //transform array in obj
      console.log(celebrityResults);
      return celebrityResults;
    })
    .then((celebResults) => {
      res.render("celebrities/celebrities", celebResults);
    })
    .catch((err) => {
      next(err);
    });
});

//GET /celebrities/:byId
router.get("/celebrities/:id", (req, res, next) => {
  Celebrity.findById(id)
    .then((results) => {
      res.render("celebritues/celebrities-detail.hbs", { celebritie: theCele });
    })
    .catch((err) => {
      next(err);
    });
});

//POST /celebrities/findByIdAndUpdate
router.post("/celebrities/:id/edit", (req, res, next) => {
  const { name, occupation, catchPhrase } = req.body;
  Celebrity.findByIdAndUpdate(id, req.body)
    .then((results) => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      next(err);
    });
});


//POST delete celebrities
router.post("/celebrities/:id/delete", (req, res, next) => {
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
