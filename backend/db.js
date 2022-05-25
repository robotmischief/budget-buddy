/*
* postgres database connection
*/

const Pool = require('pg').Pool;

// local db connection
const pool = new Pool({
    user: "postgres",
    password: "your password here",
    port: 5432,
    database: 'budbuddb'
});

module.exports = pool;