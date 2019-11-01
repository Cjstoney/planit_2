var helpers = require("./helperFunction");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var db = require('../models')

module.exports = function(app) {
  // attempt to deal with the cors problem
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  app.get("/", function(req, res) {
    res.status(200).send("Hello World");
  });

  // ==========GET ROUTES============

  // ==========POST ROUTES============
  app.post("/api/signup", (req, res) => {
    const newUser = {
      email: req.body.userPayload.email,
      name: req.body.userPayload.Name,
      password: req.body.userPayload.password,
      confirm: req.body.userPayload.confirmation
    };
    // console.log(newUser, "newUser")
    let errors = {};
    if (helpers.emptyString(newUser.email)) {
      errors.email = "Must not be empty";
    } else if (helpers.emailFormat(newUser.email)) {
      errors.email = "Must be a valid email";
    }
    if (helpers.emptyString(newUser.name)) {
      errors.name = "Must include a name";
    }
    if (newUser.password !== newUser.confirm) {
      errors.password = "Passwords do not match";
    }
    if(Object.keys(errors).length>0){
        return res.status(400).json(errors)
    }

    bcrypt.hash(newUser.password, saltRounds, function(err, hash) {
      newUser.password = hash;
      console.log(newUser, "newUser.password");
    });
  });

  // ==========DELETE ROUTES============
};
