const express = require('express');
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

  // Read a single product
  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
  
      if (!product) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
  
      res.json(product);
    } catch (error) {
      res.status(400).json({
        error: "Invalid product ID",
      });
    }
  });

  // Update a product
  router.put("/:id", async (req, res) => {
    try {
      const updatedProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true, runValidators: true }
      );
  
      if (!updatedProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
  
      res.json(updatedProduct);
    } catch (error) {
      res.status(400).json({
        error: error.message,
      });
    }
  });

  // Delete a product
  router.delete("/:id", async (req, res) => {
    try {
      const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  
      if (!deletedProduct) {
        return res.status(404).json({
          message: "Product not found",
        });
      }
  
      res.json({
        message: "Product deleted successfully",
      });
    } catch (error) {
      res.status(400).json({
        error: "Invalid product ID",
      });
    }
  });  

// Read all products with filtering, sorting, and pagination

router.get("/", async (req, res) => {
    try {
      const {
        category,
        minPrice,
        maxPrice,
        sortBy,
        page = 1,
        limit = 10,
      } = req.query;
  
      const query = {};
  
      // Filter by category
      if (category) {
        query.category = category;
      }
  
      // Filter by price range
      if (minPrice || maxPrice) {
        query.price = {};
        if (minPrice) query.price.$gte = Number(minPrice);
        if (maxPrice) query.price.$lte = Number(maxPrice);
      }
  
      // Sorting logic
      let sortOptions = {};
      if (sortBy === "price_asc") {
        sortOptions.price = 1;
      } else if (sortBy === "price_desc") {
        sortOptions.price = -1;
      }
  
      const skip = (Number(page) - 1) * Number(limit);
  
      const products = await Product.find(query)
        .sort(sortOptions)
        .skip(skip)
        .limit(Number(limit));
  
      res.json(products);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  });
  
  module.exports = router;