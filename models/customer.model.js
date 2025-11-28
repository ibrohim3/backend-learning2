const { DataTypes } = require("sequelize")
const sequelize = require("../config/database")

const Customer = sequelize.define("Customer", {
    fullname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

module.exports = Customer
