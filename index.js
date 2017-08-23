const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const mongoose = require('mongoose')


var app = express();

mongoose.connect('mongodb://localhost:introToAuth/introToAuth');

var router = require('./services/router');



app.use(morgan('combined'));
app.use(bodyParser.json());
app.use('/v1', router);



var PORT = process.env.PORT || 3000;
var HOST = process.env.HOST || '127.0.0.1';

app.listen(PORT,HOST);
console.log('[*] Listening on', HOST, PORT);



