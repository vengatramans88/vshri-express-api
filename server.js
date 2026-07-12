require("dotenv").config();

const app = require("./app");
const connectDB = require("./config/db");
const logger = require("./utils/logger");

connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
});