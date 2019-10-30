const express = require('express');
const path = require('path')
const routes = require('./routes/apiRoutes.js')
var app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

let server = app.listen(3001, function (){
    console.log('app running on port. ', server.address().port)
})
