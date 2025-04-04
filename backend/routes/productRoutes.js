const express = require("express");
const Product = require("../models/Product");
const router = express.Router();


// Function to generate a random product code
const generateProductCode = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000) // 6 digit
    return `PR${randomNumber}`
}

const generateUniqueProductCode = async () => {
    let code
    let exists = true

    while (exists) {
        code = generateProductCode()
        const existingProduct = await Product.findOne({ productCode: code })
        if (!existingProduct) {
            exists = false
        }
    }

    return code
}
// Create Product with auto-generated code
router.post('/add', async (req, res) => {
    try {
        const productCode = await generateUniqueProductCode()

        const product = new Product({
            productCode,
            productName: req.body.productName,
            brand: req.body.brand,
            model: req.body.model,
            date: req.body.date
        })

        await product.save()
        res.status(201).json({ message: 'Product created', product })
    } catch (error) {
        console.error('Error adding product:', error)
        res.status(400).json({ error: 'Failed to add product' })
    }
})

// ✅ Read Products (Get All)
router.get("/", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// ✅ Update Product
router.put("/update/:id", async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({ message: "Product updated!", updatedProduct });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// ✅ Delete Product
router.delete("/delete/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product deleted!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
