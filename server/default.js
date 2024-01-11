const products = require("./constants/data");
const product = require("./model/productSchema");

const DefaultData = async() => {
    try {
        await product.insertMany(products);
        console.log('Data importd success')
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = DefaultData;