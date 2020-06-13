const express = require('express');
const mysql = require('mysql');

const router = express.Router();

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASS,
  database: "ibrand_amazing"
});

db.connect((err) => {
	if(err) {
		throw err;
	}
});

router.get('/', (req, res) => {
	let keyword = req.query["keyword"];
	let sql = `SELECT ten_vi as ten FROM table_product WHERE ten_vi LIKE '%${keyword}%' OR tenkhongdau LIKE '%${keyword}%'`;
	let query = db.query(sql, (err, results) => {
		if(err) throw err;
		res.json({
			data: results
		});
	});
});

module.exports = router;