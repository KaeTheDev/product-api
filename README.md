# Product Inventory API – Express & Mongoose

##  Overview
This project involves building a robust and scalable RESTful Product API for an e-commerce company named Zenith. The API serves as the backend foundation for managing a product inventory that can be consumed by both internal administrative tools and a public-facing storefront.

Using Node.js, Express, and Mongoose, this API supports full CRUD functionality and advanced querying features such as filtering, sorting, and pagination to efficiently manage a large product catalog.

##  Workplace Context

Zenith is a rapidly growing e-commerce company that requires a reliable backend system to manage products at scale. As a backend developer, you are responsible for designing and implementing an API that ensures data integrity, performance, and flexibility. This API enables teams across the company to create, update, retrieve, and delete product records while supporting complex queries needed for real-world commerce applications.

##  Learning Objectives

By completing this lab, you will demonstrate your ability to:

* Design and implement a RESTful API using Express
* Define Mongoose schemas with proper validation and default values
* Compile schemas into reusable Mongoose models
* Perform full CRUD operations against a MongoDB database
* Implement advanced querying with filtering, sorting, and pagination
* Structure a backend project using modular and maintainable patterns
* Handle errors gracefully using appropriate HTTP status codes

##  Description

This lab focuses on:

* Building a backend Product API from scratch
* Connecting an Express server to MongoDB using Mongoose
* Creating a Product schema that enforces validation rules
* Implementing CRUD routes directly within Express route files
* Supporting advanced query parameters for real-world data access

##  Resources

* Node.js Documentation — https://nodejs.org/en/docs
* Express Documentation — https://expressjs.com
* Mongoose Documentation — https://mongoosejs.com


##  Getting Started

##  Requirements

*  Node.js v24+
*  npm
*  Git
*  A code editor (VS Code recommended)
*  MongoDB Atlas account

##  OS Compatibility

This lab works on:

*  Windows
*  macOS
*  Linux

##  Installation

1. Clone the repository:

git clone [<repository-url>](https://github.com/KaeTheDev/product-api.git)

2. Navigate into the project folder:

cd product_api

##  Setup

1. Install dependencies:

npm install

2. Create a .env file in the root directory and add:

PORT=3000
MONGO_URI=your_mongodb_connection_string

3. Start the server:

node server.js

The API will run at:

http://localhost:3000

##  Project Structure
product_api/
├── server.js # Main entry point
├── config/
│ └── connection.js # MongoDB connection logic
├── models/
│ └── Product.js # Mongoose Product schema and model
├── routes/
│ └── productRoutes.js # API route definitions
├── .env # Environment variables
├── .gitignore
├── package.json