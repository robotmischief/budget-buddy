const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors()); // add to handle Heroku error
app.use(express.json());


// ROUTES
// for Records
const records = require('./routes/records');
app.use('/api/v1/records', records);


app.listen(port, ()=> { console.log(`server running at port ${port} 💪`)});