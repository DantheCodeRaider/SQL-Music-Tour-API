// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class setTime extends Model{}

setTime.init({
    set_time_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
        allowNull: true 
    },
    start_time: { 
        type: DataTypes.DATE, 
        allowNull: true 
    },
    end_time: { 
        type: DataTypes.DATE, 
        allowNull: true 
    },
    event_id: { 
        type: DataTypes.INTEGER, 
        foreignKey: true, 
        references: {
            model: 'events',
            key: 'event_id',
         } 
    },
    stage_id: { 
        type: DataTypes.INTEGER, 
        foreignKey: true, 
        references: {
            model: 'stages',
            key: 'stage_id',
         } 
    },
}, {
        sequelize,                           
        modelName: 'setTime',
        tableName: 'set_times',
        timestamps: false  
}) 

// EXPORT
module.exports = setTime
