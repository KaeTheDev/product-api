const express = require('express');
require('./db/connection');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT || 3001;

const MONGO_URI = process.env.MONGO_URI;

// Middleware to parse JSON request bodies
app.use(express.json());

// Connect to MongoDB with Mongoose
mongoose.connect(MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error:", err));

// Import the product routes
const productRoutes = require('./routes/productRoutes');
app.use('/api/products', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`)
});