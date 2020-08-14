const express = require ('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
var mongoose =require('./database/db');

app.use(express.json());
const studentroute = require('./routes/student');
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/student', studentroute);
app.listen(3000,() => console.log('server started at port 3000'));
