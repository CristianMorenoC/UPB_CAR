const { Datatypes } = require('sequelize');
const { sequelize } = require('../utils/database');

const User = sequelize.define('user', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: Datatypes.INTEGER,
        allowNull: false
    },
    name: {
        type: Datatypes.STRING(50),
        allowNull: false
    },
    email: {
        type: Datatypes.STRING(100),
        unique: true,
        allowNull: false
    },
    password: {
        type: Datatypes.STRING(100),
        allowNull: false
    },
    raiting: {
        type: Datatypes.INTEGER(1),
        defaultValue: 0,
    },
    birthDate: {
        type: Datatypes.DATE,
        allowNull: false
    },
    address: {
        type: Datatypes.STRING(100),
        allowNull: false,
    },
    phone: {
        type: Datatypes.INTEGER(10),
        allowNull: false,
    },
    role: {
        type: Datatypes.STRING(10),
        defaultValue: 'user'
    },
    status: {
        type: Datatypes.STRING(20),
        // active | deleted
        defaultValue: 'active'
    }

})