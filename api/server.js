const express = require('express');
const dotenv = require('dotenv')
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT ||7000;

const router = express.Router();

app.use(cors());
app.use('/', router);

require('./routes/products')(app);
require('./routes/users')(app);
require('./routes/auth')(app);

app.listen(port);
console.log('Magic happens on port ' + port);
