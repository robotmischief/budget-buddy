const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


// ROUTES
// for Records
const records = require('./routes/records');
app.use('/api/v1/records', records);


app.listen(port, ()=> { console.log(`server running at port ${port} 💪`)});
