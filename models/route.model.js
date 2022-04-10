const { DataTypes } = require("sequelize/types");
const { sequelize } = require('../utils/database');


const Route = sequelize.define('route', {
    id: {
        primaryKey: true,// la llave primaria permite acceder a los atributos de nuestro modelo e importarlos en otros modelos y relacionarlos con las otras tablas
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    routeName: {
        type: DataTypes.STRING(20),
        allowNull: false 
    },
    route: {
        type: DataTypes.ARRAY(DataTypes.STRING(20)),
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    },
    valid: {
        type: DataTypes.STRING(10),
        defaultValue: 'invalid'
    },
    status: {
        type: DataTypes.STRING(20),
        // active | deleted
        defaultValue: 'active'
    }

})