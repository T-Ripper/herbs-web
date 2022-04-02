import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";

//desc Fetch all prodyct

// route GET /api/product

//@access Public route

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});

  res.json(products);
});

//desc Fetch single prodyct

// route GET /api/product/:id

//@access Public route

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Ptoduct not found");
  }
});

export { getProducts, getProductById };
