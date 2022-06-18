const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const appRoutes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(appRoutes);

app.listen(3000);
