const router = require("express").Router();
let Project = require("../models/user.model");

router.route("/").get((req, res) => {
  Project.find()
    .then(projects => res.json(projects))
    .catch(err => res.status(400).json("Error " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const description = req.body.description;
  const url = req.body.url;
  const date = Date.parse(req.body.date);

  const newProject = new Project({
    username,
    title,
    description,
    url,
    date
  });

  newProject
    .save()
    .then(() => res.json("Project added!"))
    .catch(err => res.status(400).json("Error " + err));
});

module.exports = router;
