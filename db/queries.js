require('dotenv').config();

const { Pool } = require("pg");

const pool = new Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    port: process.env.PGPORT,
    ssl: {
        require: true,
    },
});

async function getAllMessages() {
    const { rows } = await pool.query("SELECT message, name, TO_CHAR(added, 'Month DD, YYYY') as formatted_added FROM messages ORDER BY added DESC");
    return rows;
};

async function addNewMesasge(text, user) {
    const result = await pool.query(
        'INSERT INTO messages (message, name) VALUES ($1, $2) RETURNING *',
        [text, user]
    );
    return result.rows[0];
}

module.exports = {
    getAllMessages,
    addNewMesasge
}