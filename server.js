const express = require('express');
const path = require('path')
const routes = require('./routes/apiRoutes.js')
var app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
