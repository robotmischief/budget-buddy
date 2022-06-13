const express = require('express');
const db = require('./db');

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());


const getQuery = async ()=> {
    try {
        const res = await db.handleQuery('SELECT * FROM users WHERE user_id = $1', [1]);
        console.log(res.rows[0]);
    } catch (err) {
        console.log(err.stack)
      }
};

getQuery();



// ROUTES
// for Records
// new record
app.post('/newrecord', async (req, res) => {
    try {
        const { description } = req.body;
        const newRecord = await db.handleQuery(
            'INSERT INTO records (description, user_id, type_id, amount) VALUES ($1, $2, $3, $4) RETURNING *', [description, "1", "2", 55]
            ); // TODO: replace hardcoded testing values 
        res.json(newRecord.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// get all records
app.get('getrecords/all', async (req, res) => {
    try {
        const records = await db.handleQuery(
            'SELECT * FROM records');
        res.json(records.rows);
    } catch (e) {
        console.error(e.message);
    }
});

// get first x records
app.get('getrecords/:amount', async (req, res) => {
    try {
        const { amount } = req.params;
        const records = await db.handleQuery(
            'SELECT * FROM records ORDER BY created_at DESC LIMIT $1', [amount]);
        res.json(records.rows);
    } catch (e) {
        console.error(e.message)
    }
});

// get one record by id
app.get('/getrecord/:id', async (req, res) => {
    try {
        const { recordId } = req.params;
        const record = await db.handleQuery(
            'SELECT * FROM records WHERE record_id = $1', [recordId]);
        res.json(record.rows[0]);
    } catch (e) {
        console.error(e.message);
    }
});

// update record by id
app.put('/updaterecord/:id', async (req, res) => {
    try {
        const recordId = req.params.id;
        const { description, amount } = req.body;
        const updatedRecord = await db.handleQuery(
            'UPDATE records SET description = $1, amount = $2 WHERE record_id = $3', [description, amount, recordId]);
        res.json('Record Updated Message Here'); // TODO: better message - UI feedback
    } catch (e) {
        console.error(e.message);
    }
});

// delete record by id
app.delete('/deleterecord/:id', async (req, res) => {
    try {
        const recordId = req.params.id;
        const deletedRecord = db.handleQuery(
            'DELETE * FROM records WHERE record_id = $1', [ recordId ]);
        res.json('Record Deleted Message Here'); // TODO: better message - UI feedback
    } catch (e) {
        console.error(e.message);
    }
});

// TODO: feature get records by category
// TODO: feature get records by user
// TODO: feature admin categories

app.listen(port, ()=> { console.log(`server running at port ${port} 💪`)});
