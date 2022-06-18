const express = require("express");

const router = express.Router();
const users = [];

router.get("/", (req, res) => {
  res.render("form", { pageTitle: "form" });
});

router.get("/users", (req, res) => {
  res.render("users", { pageTitle: "Users", users });
});

router.post("/add-user", (req, res) => {
  users.push(req.body.username);
  res.redirect("/");
});

module.exports = router;
