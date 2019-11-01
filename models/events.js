module.exports = function(sequelize, DataType){
    var Events = sequelize.define('Events', {
        event_id:{
            type: DataType.INTEGER,
            primarykey:TRUE
        },
        event_name:DataType.String,
        month: DataType.STRING,
        day:DataType.INTEGER,
        year:DataType.INTEGER,
        // do I need to make a relation here?
        important:DataType.BOOLEAN,
        description: DataType.String
    })
    return Events
}