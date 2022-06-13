const express = require('express');
const router = express.Router();


const {
    createNewRecord,
    getAllRecords,
    getSomeRecords,
    getRecordById,
    updateRecord,
    deleteRecord
} = require('../controllers/records');

router
.route('/new')
.post(createNewRecord);

router
.route('/getrecords/all')
.get(getAllRecords);

// router
// .route('/:id')
// .delete(deleteTransaction);

module.exports = router;