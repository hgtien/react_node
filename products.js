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
	let sql = `SELECT id, ten_vi as ten, photo FROM table_product`;
	const serImagesUrl = req.protocol + '://' + req.get('host') + '/images/';
	db.query(sql, (err, results) => {
		if(err) throw err;
		for (let [key, value] of Object.entries(results)) {
		    results[key]['photo'] = serImagesUrl + results[key]['photo'];
		}
		res.json({
			data: results
		});
	});
	
});

module.exports = router;