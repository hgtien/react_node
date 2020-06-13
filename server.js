const express = require('express');
const cors = require('cors');
require('dotenv/config');

// import Routes
const productRoute = require('./routes/products.js');
const searchProductRoute = require('./routes/search.js');

const app = express();

app.use(express.static('public'));
app.use(cors());
app.use('/product', productRoute);
app.use('/search', searchProductRoute);

app.get('/', (req, res) => {
	res.send('We are on HOME');
});

app.listen('4000', () => {
	console.log('Server start on port 4000');
});

