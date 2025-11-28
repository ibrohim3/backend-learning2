const { Sequelize } = require("sequelize")

const sequelize = new Sequelize("crmdb", "postgres", "YOUR_PASSWORD", {
    host: "localhost",
    dialect: "postgres",
    logging: false
})

module.exports = sequelize
