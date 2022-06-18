const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("form", { pageTitle: "form" });
});

router.get("/users", (req, res) => {
  res.render("users", { pageTitle: "Users" });
});

module.exports = router;
