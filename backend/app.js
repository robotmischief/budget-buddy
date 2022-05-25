const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();
const port = 5000; // TODO: setup host port

app.use(cors());
app.use(express.json());


// ROUTES
// for Records
// new record
app.post('/newrecord', async (req, res) => {
    try {
        const { description } = req.body;
        const newRecord = await pool.query(
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
        const records = await pool.query(
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
        const records = await pool.query(
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
        const record = await pool.query(
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
        const updatedRecord = await pool.query(
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
        const deletedRecord = pool.query(
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