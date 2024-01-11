const mongoose = require('mongoose');
const dotenv=require('dotenv')

dotenv.config();

const URL = process.env.DB_URL ;
const Connection = mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(() => console.log("Database connected Successfully")).catch((error) => {
    console.log(error);
})

module.exports = Connection