const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// ======================
// Middleware
// ======================

// Enable CORS (allow frontend to connect)
app.use(cors());

// Parse incoming JSON data
app.use(express.json());

// ======================
// Routes
// ======================

const messageRoutes = require("./routes/messageRoutes");

// All message routes will start with /api/messages
app.use("/api/messages", messageRoutes);

// Test route (optional but useful)
app.get("/", (req, res) => {
  res.send("API is running...");
});

// ======================
// MongoDB Connection
// ======================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB Connection Failed:", error.message);
    process.exit(1); // Stop server if DB fails
  });

// ======================
// Start Server
// ======================

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
