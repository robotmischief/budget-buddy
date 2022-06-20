/*
* postgres database connection
*/
const dotenv = require('dotenv');
const { Pool } = require('pg');
dotenv.config({path: './config/config.env'});

// local db connection
// const pool = new Pool({
//     user: "your user name here (usually postgres)",
//     password: "your password here",
//     port: 5432,
//     database: 'budbuddb'
// });

// remote db connection
const pool = new Pool({
            connectionString: process.env.DB_URI,
            ssl: {
                rejectUnauthorized: false
              }
          });

const checkConnection = async () => {
    try {
        await pool.connect();
        console.log('DB connected ✨');
    } catch (error) {
        console.log('DB not connected 💥');
        console.log(`Error Connecting to DB: ${error.message}`);
        // process.exit(1);
    }
}

const handleQuery = (queryText, params) => pool.query(queryText, params);

checkConnection();

module.exports = { pool, checkConnection, handleQuery };