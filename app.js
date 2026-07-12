const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

const routes = require("./routes");
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/api/v1", routes);

// 404
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

module.exports = app;