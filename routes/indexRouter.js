const express = require('express');
const router = express.Router();
const { getAllMessages, addNewMesasge } = require('../db/queries');

const links = [
    { href: "/", text: "Home", className: "home-button" },
    { href: "new", text: "+ New Message", className: "new-message-button" },
];

//home page route
router.get("/", async (req, res) => {
    try {
        const messages = await getAllMessages();
        res.render("index", { messages: messages, links: links });
    } catch (err) {
        console.error("Error getting messages:", err);
        res.status(500).send("Internal Server Error");
    }
});

//new message page route
router.get("/new", (req, res) => {
    res.render("new", { links: links });
});

//post new message route
router.post("/new", async (req, res) => {
    const { message, user } = req.body;

    try {
        await addNewMesasge(message, user);
        res.redirect("/");
    } catch (err) {
        console.error("Error adding message:", err);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;