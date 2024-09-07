const express = require('express');
const path = require("node:path");
const routes = require('./routes/indexRouter');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.use('/', routes);

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
