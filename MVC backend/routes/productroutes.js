const express = require("express");

const router =express.Router()

const {createProduct,ViewProduct,deleteproduct, updateproduct} = require("../controller/productapi")
 

//routes
router.post("/",createProduct);
router.get("/",ViewProduct);
router.delete("/:id",deleteproduct);
router.put("/:id",updateproduct);

module.exports = router;