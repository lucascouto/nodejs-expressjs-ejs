const path = require("path");

const express = require("express");

const appRoutes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use(appRoutes);

app.listen(3000);
