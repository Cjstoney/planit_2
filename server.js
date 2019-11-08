require('dotenv').config();

const express = require('express');
const path = require('path')
var app = express();
var db = require('./models')

const PORT = process.env.PORT || 3001
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let syncOptions = { force: false }

if (process.env.NODE_ENV === 'test'){
  syncOptions.force = true;
}

require('./routes/apiRoutes')(app)

db.sequelize.sync(syncOptions).then(function(){
  app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
});
