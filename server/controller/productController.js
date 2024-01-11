const Product = require("../model/productSchema");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        console.log(products);
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getProductById = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ 'id': id })
        res.status(200).json(product);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
module.exports = { getProducts, getProductById };