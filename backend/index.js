// Load env variables first
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db');

const authRoutes = require('./routes/authRoutes');
const mstRoutes = require('./routes/mstRoutes');
const mstDesignRoutes = require('./routes/mstDesignRoutes');

const app = express();

// ✅ Connect MongoDB
connectDB();

// ✅ Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true,
}));
app.use(bodyParser.json());

// ✅ Routes
app.use("/api/auth", authRoutes);
app.use("/api/mst", mstRoutes);
app.use("/api/mstDesign", mstDesignRoutes);
app.use("/api/mst/designs", mstDesignRoutes); // Consider merging under one consistent route

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

// ✅ Port from env
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
