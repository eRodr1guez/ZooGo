const db = require("../models");
var bcrypt = require("bcryptjs");

const correctPassword = (enteredPassword, originalPassword) => {
  return new Promise((resolve) => {
    bcrypt.compare(enteredPassword, originalPassword, (err, res) => {
      resolve(res);
    });
  });
};

module.exports = function (app) {
  // Returns all animals and their trivia questions from database.
  app.get("/api/animals", function (req, res) {
    db.Animal.findAll({ include: [db.Trivia] })
      .then(
        (data) => res.json(data),
        (error) => res.sendStatus(500)
      )
      .catch((error) => res.sendStatus(500));
  });

  // Returns specific animal based on the id value in the Animals Table and includes their trivia questions.
  app.get("/api/animals/:id", function (req, res) {
    db.Animal.findOne({
      where: {
        id: req.params.id,
      },
      include: [db.Trivia],
    })
      .then(
        (data) => res.json(data),
        (error) => res.sendStatus(500)
      )
      .catch((error) => res.sendStatus(500));
  });

  // Returns the list of available items in the prize table along with its cost in coins/points
  app.get("/api/prizes", function (req, res) {
    db.Prizes.findAll({})
      .then(
        (data) => res.json(data),
        (error) => res.sendStatus(500)
      )
      .catch((error) => res.sendStatus(500));
  });

  // Returns the specific item based on the id in the prize table along with its cost in coins/points
  app.get("/api/prizes/:id", function (req, res) {
    db.Prizes.findAll({
      where: {
        id: req.params.id,
      },
    })
      .then(
        (data) => res.json(data),
        (error) => res.sendStatus(500)
      )
      .catch((error) => res.sendStatus(500));
  });

  // Updates the user's total points, requires user id and points (total number of points of the user) to be sent in request. Returns status codes.
  app.put("/api/updatescore", function (req, res) {
    db.User.update(
      {
        points: req.body.points,
      },
      {
        where: {
          id: req.body.id,
        },
      }
    )
      .then(
        () => res.sendStatus(202),
        (error) => res.sendStatus(500)
      )
      .catch((error) => res.status(500).send("Error Updating User Points"));
  });

  //Register User
  app.post("/api/registerUser", function (req, res) {
    db.User.create(req.body)
      .then((data) => {
        res.json(data);
      })
      .catch(console.error);
  });

  //login
  app.post("/api/login", (req, res) => {
    db.User.findOne({
      where: {
        username: req.body.username,
      },
    }).then((user) => {
      correctPassword(req.body.password, user.password)
        .then((authenticated) => {
          res.json(user);
        })
        .catch((e) => {
          res.send(e);
        });
    });
  });
};
