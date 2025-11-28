const sequelize = require("../config/database")

const User = require("./user.model")
const Customer = require("./customer.model")

// Relations
User.hasMany(Customer, { foreignKey: "userId" })
Customer.belongsTo(User, { foreignKey: "userId" })

module.exports = {
    sequelize,
    User,
    Customer
}
