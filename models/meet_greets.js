// DEPENDENCIES
const { Sequelize, DataTypes,  Model } = require('sequelize')

// MODEL
class meetGreet extends Model{}

meetGreet.init({
    meet_greet_id: { 
        type: DataTypes.INTEGER, 
        primaryKey: true, 
        autoIncrement: true
    },
    name: { 
        type: DataTypes.STRING, 
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
    band_id: { 
        type: DataTypes.INTEGER, 
        foreignKey: true, 
        references: {
            model: 'bands',
            key: 'band_id',
         } 
    },
}, {
        sequelize,                           
        modelName: 'meetGreet',
        tableName: 'meet_greets',
        timestamps: false  
}) 

// EXPORT
module.exports = meetGreet
