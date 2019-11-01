const express = require('express');
const path = require('path')
const routes = require('./routes/apiRoutes.js')
var app = express();
var db = require('./models')

const PORT = process.env.PORT || 3001
app.use(express.json());
app.use(express.urlencoded({extended: true}));

routes(app);

db.sequelize.sync().then(function(){
  app.listen(PORT, function() {
      console.log(
        "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
        PORT,
        PORT
      );
    });
});
