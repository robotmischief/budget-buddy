const express = require('express');
const router = express.Router();

const {
    createNewRecord,
    getAllRecords,
    getLatestRecords,
    getRecordById,
    updateRecord,
    deleteRecord
} = require('../controllers/records');

router
.route('/new')
.post(createNewRecord);

router
.route('/get/all')
.get(getAllRecords);

router
.route('/get/:id')
.get(getRecordById);

router
.route('/latest/:count')
.get(getLatestRecords);

router
.route('/delete/:id')
.delete(deleteRecord);

router
.route('/update/:id')
.put(updateRecord);

module.exports = router;