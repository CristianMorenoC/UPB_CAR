const { DataTypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const User = sequelize.define('user', {
    id: {// cada modelo siempre debe trener su identificador, que suele ser escrito id:  
        primaryKey: true,// la llave primaria permite acceder a los atributos de nuestro modelo e importarlos en otros modelos y relacionarlos con las otras tablas
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(50),
        allowNull: false 
    },
    email: {
        type: DataTypes.STRING(100),
        unique: true,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    raiting: {
        type: DataTypes.INTEGER(1),
        defaultValue: 0,
    },
    birthDate: {
        type: DataTypes.DATE,
        allowNull: false
    },
    address: {
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    phone: {
        type: DataTypes.INTEGER(10),
        allowNull: false,
    },
    role: {
        type: DataTypes.STRING(10),
        defaultValue: 'user'
    },
    status: {
        type: DataTypes.STRING(20),
        // active | deleted
        defaultValue: 'active'
    }

})