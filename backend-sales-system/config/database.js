// db.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sales_system', 'postgres', 'admin123', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;


