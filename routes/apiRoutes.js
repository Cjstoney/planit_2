var helpers = require("./helperFunction");
var Sequelize = require("sequelize");
const Op = require("Sequelize").Op;

// const bcrypt = require("bcrypt");
// const saltRounds = 10;
var db = require("../models");

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
  // ============================POST ROUTES==============================
  app.post("/api/month", (req, res) => {
    let monthErrors = {};
    console.log("month", req.body);
    let bmonth = req.body.payload.month;
    let user = req.body.payload.user;
    let year = req.body.payload.year;
    if (helpers.emptyString(bmonth)) {
      monthErrors.month = "invalid month";
    }
    if (helpers.emptyString(year)) {
      monthErrors.year = "invalid year";
    }
    if (Object.keys(monthErrors).length > 0) {
      res.status(400).json(monthErrors);
    } else {
      db.Events.findAll({
        where: {
          [Op.and]: [
            { month: { [Op.eq]: bmonth } },
            { year: { [Op.eq]: year } },
            {
              [Op.or]: [{ UserUserId: null }, { UserUserId: { [Op.eq]: user } }]
            }
          ]
        }
      }).then(month => {
        // console.log(month);
        res.json(month);
      });
    }
  });

  // =====Rout for the list of daily items
  app.post("/api/day", (req, res) => {
    let monthErrors = {};
    console.log("month", req.body);
    let bmonth = req.body.payload.month;
    let user = req.body.payload.user;
    let year = req.body.payload.year;
    let day = req.body.payload.dayOfMonth;
    if (helpers.emptyString(bmonth)) {
      monthErrors.month = "invalid month";
    }
    if (helpers.emptyString(year)) {
      monthErrors.year = "invalid year";
    }
    if (Object.keys(monthErrors).length > 0) {
      res.status(400).json(monthErrors);
    } else {
      db.Events.findAll({
        where: {
          [Op.and]: [
            { month: { [Op.eq]: bmonth } },
            { year: { [Op.eq]: year } },
            { day: { [Op.eq]: day } },
            {
              [Op.or]: [{ UserUserId: null }, { UserUserId: { [Op.eq]: user } }]
            }
          ]
        }
      }).then(month => {
        // console.log(month);
        res.json(month);
      });
    }
  });

  app.post("/api/addevent", (req, res) => {
    const eventName = req.body.payload.event;
    const eventDesc = req.body.payload.description;
    const eventDay = req.body.payload.day;
    const eventMonth = req.body.payload.month;
    const eventYear = req.body.payload.year;
    const username = req.body.payload.user;

    const errors = {};

    if (helpers.emptyString(eventName)) {
      errors.eventName = "Must not be empty";
    }
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      res.status(400).json(errors);
    } else {
      db.Events.create({
        Event_id : null,
        name: eventName,
        description: eventDesc,
        day: eventDay,
        month: eventMonth,
        year: eventYear,
        UserUserId: username
      })
        .then(response => {
          console.log(response, "user added");
          res.status(201).send("event added");
        })
        .catch(error => {
          res.send(error);
        });
    }
  });

  // ====Route for signing up a new user===
  app.post("/api/signup", (req, res) => {
    let email = req.body.userPayload.email;
    let name = req.body.userPayload.Name;
    let password = req.body.userPayload.password;
    let confirm = req.body.userPayload.confirmation;

    // console.log(newUser, "newUser")
    let errors = {};
    if (helpers.emptyString(email)) {
      errors.email = "Must not be empty";
      // } else if (helpers.emailFormat(email)) {
      //   errors.email = "Must be a valid email";================================================== still need to work on email validation
    }
    if (helpers.emptyString(name)) {
      errors.name = "Must include a name";
    }
    if (password !== confirm) {
      errors.password = "Passwords do not match";
    }
    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return res.status(400).json(errors);
    } else {
      db.Users.create({
        name: name,
        email: email,
        password: password
      })
        .then(user => {
          let redir = { redirect: "/calendar" };
          res.status(201).json(redir);
          console.log("user added");
        })
        .catch(error => {
          res.send(error);
        });
    }
  });

  // ==== Route to login =====
  app.post("/api/login", (req, res) => {
    let loginEmail = req.body.loginUserPayload.email;
    let loginPassword = req.body.loginUserPayload.password;

    let errors = {};
    if (helpers.emptyString(loginEmail)) {
      errors.email = "must include a valid email";
    }
    if (helpers.emptyString(loginPassword)) {
      errors.Password = "must include a valid Password";
    }
    if (Object.keys(errors).length > 0) {
      res.status(400).json(errors);
    } else {
      db.Users.findAll({
        where: {
          email: loginEmail,
          password: loginPassword
        }
      })
        .then(user => {
          let resData = {};
          resData.response = user[0].dataValues;
          resData.redir = { redirect: "/calendar" };
          if (user.length === 0) {
            res.status(400).json("email or password is incorrect");
          } else {
            // create and send back a token for the user?
            // redirect to the calendar page for specific user
            res.status(201).json(resData);
          }
        })
        .catch(errors => {
          console.log(errors);
        });
    }
  });
  // ==========DELETE ROUTES============
};
