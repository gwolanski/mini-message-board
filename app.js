const { Router } = require('express');
const express = require('express');
const path = require("node:path");
const app = express();

const today = new Date();
const day = today.getDate();
const month = today.getMonth();
const year = today.getFullYear();

const months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];

const monthName = months[month];

const messages = [
    {
        text: "Fetch is my favorite thing in the whole world.",
        user: "Chaco",
        added: `${monthName} ${day}, ${year}`
    },
    {
        text: "Screaming makes me happy.",
        user: "Floki",
        added: `${monthName} ${day}, ${year}`
    }
];

app.get("/", (req, res) => {
    res.render("index", { messages: messages });
});

app.get("/new", (req, res) => {
    res.render("new");
});



const assetsPath = path.join(__dirname, "public");
app.use(express.static(assetsPath));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const PORT = 3000;
app.listen(PORT, () => console.log(`listening on port ${PORT}!`));
