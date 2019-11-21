module.exports = function (sequelize, DataTypes){
    const Events = sequelize.define('Events', {
        Event_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false
          },
          month: {
            type: DataTypes.STRING,
            allowNull: false
          },
          day:{
            type:DataTypes.INTEGER,
            allowNull: false
          },
          year: {
            type: DataTypes.INTEGER,
            allowNull: false
          },
          important:{
              type: DataTypes.BOOLEAN,
              allowNull: false,
              defaultValue: false
          },
          description:{
              type: DataTypes.STRING,
              allowNull: true
          }
    });
    return Events;
}