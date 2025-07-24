// import authRoutes from "./routes/authRoutes.js";
// import graphRoutes from "./routes/graphRoutes.js";
// import express from "express";
// import cors from "cors";
// import bodyParser from "body-parser";
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/db'); // 👈 Import

const app = express();
const PORT = 5000;

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const authRoutes = require('./routes/authRoutes');
const mstRoutes = require('./routes/mstRoutes');



const { config } = require('dotenv');


//app.use('/api', dijkstraRoutes);
app.use("/api/auth", authRoutes);
app.use('/api/mst', mstRoutes);
app.use("/api/mstDesign", require("./routes/mstDesignRoutes"));
app.use('/api/mst/designs', require('./routes/mstDesignRoutes'));



app.get('/', (req, res) => {
  res.send('Backend is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});


