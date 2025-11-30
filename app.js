const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");
const userRoutes = require("./routes/user.routes");
const setupSwagger = require("./swagger/swagger");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5577;

app.use(express.json());
app.use(cors({ origin: "*" }));
app.use("/api", userRoutes);

setupSwagger(app);

sequelize
    .sync()
    .then(() => {
        console.log("Database ulandi");
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    })
    .catch((err) => console.error("DB xatosi:", err));
