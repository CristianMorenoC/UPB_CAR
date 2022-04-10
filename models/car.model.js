const { DataTypes } = require("sequelize/types");
const { sequelize } = require('../utils/database');

const Car = sequelize.define('car', {
    id: {
        primaryKey: true,// la llave primaria permite acceder a los atributos de nuestro modelo e importarlos en otros modelos y relacionarlos con las otras tablas
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    placa: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    modelo: {
        type: DataTypes.STRING(10),
        allowNull: false

    },
    color: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    foto: {
        type: DataTypes.STRING(255),
        unique:true,
        allowNull: false,
    },
    userID: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: false,
    },
    tarjetaPropiedad: {
        type: DataTypes.STRING(10),
        unique:true,
        allowNull: false,
    },
    fotoTarjetaPripiedad: {
        type: DataTypes.STRING(255),
        unique:true,
        allowNull: false,    
    },
    status: {
        type: DataTypes.STRING(20),
        // active | deleted
        defaultValue: 'active'
    },
    verify: {
        type: DataTypes.STRING(10),
        defaultValue: 'disapprove'
    },
    capacity: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
    

});
