// Express server starts here
require("dotenv").config();

const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Welcome to VSHRI Express API 🚀"
  });
});

app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    uptime: process.uptime(),
    timestamp: new Date()
  });
});

app.get("/api/users", (req, res) => {
  res.json([
    {
      id: 1,
      name: "Vengat"
    },
    {
      id: 2,
      name: "John"
    }
  ]);
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});