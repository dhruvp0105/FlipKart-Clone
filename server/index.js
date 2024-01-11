const express = require('express')
const Connection = require('./database/db');
const dotenv = require('dotenv');
const DefaultData = require('./default');
const route = require('./routes/route');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
dotenv.config();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', route);

const PORT = 8000;
Connection
app.listen(PORT, () => {
    console.log(`Server is running Successfully on port ${PORT}`);
})

app.get('/getkey', (req, res) => {
    res.status(200).json({ key: process.env.RAZORPAY_ID_KEY })
})
DefaultData();






// paytmParams['MID'] = process.env.PAYTM_MID;
// paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE;
// paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID;
// paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID;
// paytmParams['ORDER_ID'] = uuid();
// paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID;
// paytmParams['TXN_AMOUNT'] = '100';
// paytmParams['CALLBACK_URL'] = 'http://localhost:8000/callback';
// paytmParams['EMAIl'] = 'abc576@gmail.com';
// paytmParams['MOBILE_NO'] = '1234567890';

// const paytmParams = {
//     'MID': process.env.PAYTM_MID,
//     'WEBSITE': process.env.PAYTM_WEBSITE,
//     'CHANNEL_ID': process.env.PAYTM_CHANNEL_ID,
//     'INDUSTRY_TYPE_ID': process.env.PAYTM_INDUSTRY_TYPE_ID,
//     'ORDER_ID': uuid(),
//     'CUST_ID': process.env.PAYTM_CUST_ID,
//     'TXN_AMOUNT': '100',
//     // 'CALLBACK_URL': 'http://localhost:8000/callback',
//     'EMAIl': 'abc576@gmail.com',
//     'MOBILE_NO': '1234567890'
// }

// console.log(paytmMerchantKey);
// console.log(paytmParams);
// module.exports = { paytmMerchantKey, paytmParams };