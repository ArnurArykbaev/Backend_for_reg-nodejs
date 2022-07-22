const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(`<h1>${req.query.theme} ${req.query.sort}</h1>`);
});

router.get("/:username", (req, res) => {
  res.render("profile", {
    username: req.params.username,
    cheese: "chaddar",
  });
});

module.exports = router;
