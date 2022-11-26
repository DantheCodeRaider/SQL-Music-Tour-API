// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class stageEvent extends Model{}

stageEvent.init({
    stage_event_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
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
        modelName: 'stageEvent',
        tableName: 'stages_events',
        timestamps: false  
}) 

// EXPORT
module.exports = stageEvent
