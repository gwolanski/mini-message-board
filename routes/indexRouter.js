const express = require('express');
const router = express.Router();
const getFormattedDate = require('../utils/date');

const links = [
    { href: "/", text: "Home", className: "home-button" },
    { href: "new", text: "+ New Message", className: "new-message-button" },
];

const messages = [
    {
        text: "I live, breathe, eat fetch.",
        user: "Chaco",
        added: getFormattedDate()
    },
    {
        text: "I like to sing the song of my people.",
        user: "Floki",
        added: getFormattedDate()
    }
];

//home page route
router.get("/", (req, res) => {
    res.render("index", { messages: messages, links: links });
});

//new message page route
router.get("/new", (req, res) => {
    res.render("new", { links: links });
});

//post new message route
router.post("/new", (req, res) => {
    const newMessage = {
        text: req.body.message,
        user: req.body.user,
        added: getFormattedDate()
    };
    messages.push(newMessage);
    res.redirect("/");
});

module.exports = router;