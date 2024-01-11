const Razorpay = require('razorpay');
const crypto = require('crypto');
const Payment = require('../model/paymentSchema');

const RAZORPAY_ID_KEY = process.env.RAZORPAY_ID_KEY;
const RAZORPAY_SECRET_KEY = process.env.RAZORPAY_SECRET_KEY;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY,
})

const addPaymentGateway = async (req, res) => {

    try {
        const options = {
            amount: Number(req.body.amount * 100),  // amount in the smallest currency unit
            currency: "INR",
        };
        const order = await razorpayInstance.orders.create(options);
        // console.log(order);
        res.status(200).json(order);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const paymentVerification = async (req, res) => {

    try {
        // console.log("Ok");
        console.log(req.body);
        // res.status(200).json(req.body);
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto.createHmac("sha256", RAZORPAY_SECRET_KEY).update(body.toString()).digest("hex");

        // console.log("sign receives", razorpay_signature);
        // console.log("sign generated", expectedSignature);

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {

            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });
            res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`);
        } else {
            res.status(400).json({
                success: false,
            });
        }
    }
    catch (error) {
        res.status(500).json({ error: "Why" });
    }

}

module.exports = { addPaymentGateway, paymentVerification };





// const paytmMerchantKey = 'V&2v3reS91F39I!8';

// const paytmParams = {
//     // MID: 'kXQgyJ43758877731118',
//     // MID: 'DIY12386817555501617',
//     MID: 'unzVbW56349744191124',
//     // WEBSITE: 'DEFAULT',
//     WEBSITE: 'WEBSTAGING',
//     CHANNEL_ID: 'WEB',
//     INDUSTRY_TYPE_ID: 'Retail',
//     ORDER_ID: uuid(),
//     CUST_ID: 'unzVbW56349744191124',
//     TXN_AMOUNT: '100',
//     // CALLBACK_URL: 'http://localhost:8000/callback',
//     EMAIl: 'abc576@gmail.com',
//     MOBILE_NO: '1234567890'
// }