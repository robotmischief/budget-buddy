/*
* postgres database connection
*/
const dotenv = require('dotenv');
const Pool = require('pg').Pool;
dotenv.config({path: './config.env'});

// local db connection
// const pool = new Pool({
//     user: "postgres",
//     password: "your password here",
//     port: 5432,
//     database: 'budbuddb'
// });
// remote db connection
const pool = new Pool({
    host: process.env.HOST_DB,
    user: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    port: process.env.PORT_DB
});


module.exports = pool;