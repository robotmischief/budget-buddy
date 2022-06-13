const db = require('../db');

//@desc get all records
//@route GET api/v1/records/getrecords/all
//@access Public
exports.getAllRecords = async (req, res, next) => {
    try {
        const records = await db.handleQuery(
            'SELECT * FROM records');
        
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

//@desc Add Record
//@route POST api/v1/records/new
//@access Public
exports.createNewRecord = async (req, res, next) => {
    try {
        const { userId, type, category, description, amount } = req.body;
        const newRecord = await db.handleQuery('INSERT INTO records (user_id, type_id, category_id, description, amount) VALUES ($1, $2, $3, $4, $5) RETURNING *', [userId, type, category, description, amount]);
        return res.status(201).json({
            success: true,
            data: newRecord
        });
    } catch (error) {
        return res.status(400).json({
            success: false,
            error: error.message
        });
    }
};

//@desc Add transaction
//@route POST api/v1/transactions/:id
//@access Public
// exports.deleteTransaction = async (req, res, next) => {
//     try {
//         const transaction = await Transaction.findById(req.params.id);
        
//         if(!transaction) {
//             return res.status(404).json({
//                 success: false,
//                 error: 'No transaction found'
//             });
//         }

//         await transaction.remove();

//         return res.status(200).json({
//             success:true,
//             data: {}
//         });

//     } catch (error) {
//         console.log(req.params.id);
//         console.log(transaction);
//         return res.status(500).json({
//             success: false,
//             error: 'Server error'
//         });
//     }
// }