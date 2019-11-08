module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: 1
        },
        name: DataTypes.STRING,
        email:DataTypes.STRING,
        password:DataTypes.STRING
    })
    return User
}