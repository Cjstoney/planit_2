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
    }, {});
    User.associate = function(models){
      User.hasMany(models.Events, {as: 'user'})
    }
    return User;
}