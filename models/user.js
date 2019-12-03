const bcrypt = require('bcrypt');

module.exports = function (sequelize, DataTypes){
    const User = sequelize.define('Users', {
        user_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          }
    });

    User.generateHash = function (password){
      return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
    }

    User.prototype.validPassword = function(password){
      return bcrypt.compareSync(password, this.localPassword)
    }
    
    User.associate = function(models){
      User.hasMany(models.Events, {as: 'user'})
    }
    return User;
}