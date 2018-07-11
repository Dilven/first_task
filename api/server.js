const express = require('express');
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

process.env.DB_TYPE = process.argv[2] || "ES";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT ||7000;

const router = express.Router();

app.use(cors());
app.use('/', router);

require('./routes/products')(app);

app.listen(port);
console.log('Magic happens on port ' + port);
