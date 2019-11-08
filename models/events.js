module.exports = function(sequelize, DataType){
    var Events = sequelize.define('Events', {
        event_id:{
            type: DataType.INTEGER,
            primarykey: 1
        },
        event_name:DataType.STRING,
        month: DataType.STRING,
        day:DataType.INTEGER,
        year:DataType.INTEGER,
        // do I need to make a relation here?
        important:DataType.BOOLEAN,
        description: DataType.STRING
    })
    return Events
}