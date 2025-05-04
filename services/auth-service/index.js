require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./src/config/db');
const authRoutes = require('./src/modules/auth/interface/routes/auth.routes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Auth Service running on port ${PORT}`);
});
