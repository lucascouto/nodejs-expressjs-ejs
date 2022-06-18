const express = require("express");

const appRoutes = require("./routes/index");

const app = express();

app.set("view engine", "ejs");
app.use(appRoutes);

app.listen(3000);
