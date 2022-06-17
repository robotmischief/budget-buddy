const db = require('../db');

//@desc get all records
//@route GET api/v1/records/get/all
//@access Public
exports.getAllRecords = async (req, res, next) => {
    try {
        const records = await db.handleQuery(
            'SELECT * FROM records ORDER BY created_at DESC');
        
        return res.status(200).json({
            success: true,
            count: records.rows.length,
            data: records.rows
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error: ${error.message}`
        });
    }
};

//@desc get record by id
//@route GET api/v1/records/get/:id
//@access Public
exports.getRecordById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const record = await db.handleQuery('SELECT * FROM records WHERE record_id = $1', [id]);

        return res.status(200).json({
            success: true,
            count: record.rows.length,
            data: record.rows[0]
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error: ${error.message}`
        });
    }
}

//@desc get X amount of the latest records
//@route GET api/v1/records/latest/:count
//@access Public
exports.getLatestRecords = async (req, res, next) => {
    try {
        const { count } = req.params;
        const latestRecords = await db.handleQuery('SELECT * FROM records ORDER BY created_at DESC LIMIT $1', [count]);

        return res.status(200).json({
            success: true,
            count: latestRecords.rows.length,
            data: latestRecords.rows
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: `Server Error: ${error.message}`
        });
    }
}

//@desc Add Record
//@route POST api/v1/records/new
//@access Public
exports.createNewRecord = async (req, res, next) => {
    try {
        const {
            user_id, 
            created_at, 
            type_id, 
            amount, 
            category_id, 
            description 
        } = req.body;

        const newRecord = await db.handleQuery('INSERT INTO records (created_at, user_id, type_id, amount, category_id, description) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *', [created_at, user_id, type_id, amount, category_id, description]);
        return res.status(201).json({
            success: true,
            data: newRecord.rows[0]
        });
    } catch (error) {
        console.log(error);
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

//@desc delete record by id
//@route DELETE api/v1/records/delete/:id
//@access Public
exports.deleteRecord = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteRecord = await db.handleQuery('DELETE FROM records WHERE record_id = $1', [ id ]);

        return res.status(200).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}

//@desc update record by id
//@route PUT api/v1/records/update/:id
//@access Public
//@restriction not posible to update user_id or type_id
exports.updateRecord = async (req, res, next) => {
    try {
        const recordId = req.params.id;
        const { category_id, description, amount } = req.body;
        
        const updatedRecord = await db.handleQuery(
            'UPDATE records SET category_id = $1, description = $2, amount = $3 WHERE record_id = $4', [ category_id, description, amount, recordId ]);

        return res.status(204).json({
            success: true,
            data: {}
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }
}


//@desc get all records of a specific type (1=earnt or 2=spent)
//@route GET api/v1/records/type/:earntorspent
//@access Public
exports.getRecordsByType = async (req, res, next) => {
    try {
        const type_id = (req.params.earntorspent === 'earnt') ? 1 : 2;
        const recordsByType = await db.handleQuery('SELECT * FROM records WHERE type_id = $1 ORDER BY created_at DESC', [type_id]);

        return res.status(200).json({
            success: true,
            count: recordsByType.rows.length,
            data: recordsByType.rows
        });

    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error.message
        });
    }

}
// TODO: feature get records by category
// TODO: feature get records by user
// TODO: feature admin categories