const express = require('exprress');
const Product = require('../models/Product');
const router = express.Router();

// Create a new product
router.post("/", async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  });