const { Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});


const dbConnect = async () => {
    try {
        console.log(`DB connecting using this URI ${process.env.DB_URI}`);
        const client = new Client({
          connectionString: process.env.DB_URI,
          ssl: {
            rejectUnauthorized: false
          }
        });

        const conn = await client.connect();
        console.log(`Connected to DB`);

        client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
          if (err) throw err;
          for (let row of res.rows) {
            console.log(JSON.stringify(row));
          }
          client.end();
        });

    } catch (error) {
        console.log(`Error Connecting to DB: ${error.message}`);
        process.exit(1);
    }
};

module.exports = dbConnect;