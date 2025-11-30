const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("backend", "postgres", "1707", {
    host: "localhost",
    dialect: "postgres",
    logging: false
});

module.exports = sequelize;
