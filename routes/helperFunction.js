var bcrypt = require("bcrypt");
module.exports = {
  emptyString: function(string) {
    if (string.trim() === "") return true;
    else return false;
  },

  emailFormat: function(email) {
    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.match(emailRegEx)) return true;
    else return false;
  },

  cryptPassword: function(password, callback) {
    bcrypt.genSalt(10, function(err, salt) {
      if (err) return callback(err);

      bcrypt.hash(password, salt, function(err, hash) {
        return callback(err, hash);
      });
    });
  },

  comparePassword: function(plainPass, hashword, callback) {
    bcrypt.compare(plainPass, hashword, function(err, isPasswordMatch) {
      return err == null ? callback(null, isPasswordMatch) : callback(err);
    });
  }
};
