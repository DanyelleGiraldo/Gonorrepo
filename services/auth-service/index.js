require('dotenv').config()
const express = require('express')
const mongoose = require('./src/config/db')
const authRoutes = require('./src/modules/auth/interface/auth.routes')

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

app.listen(process.env.PORT, () => console.log('server on port: ', process.env.PORT))