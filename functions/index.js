const functions = require("firebase-functions");
const express = require("express")
const cors = require("cors")
const stripe = require('stripe')('sk_test_51J9p3mSFgs3cXg1cVSGWp8dxGxpkRloIDJXPXrsM4kNITAGODOWzuqua6KGRaeCHnT9KEoooyjJM5tAd4Mn6nkiX007UiMRT71')

// API

// App config
const app = express();
// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async(request, response) =>{
    const total = request.query.total;
    console.log('Payment Request Recieved. for this amount ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of currency
        currency: 'inr',
    });
    // ok -created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app)

// http://localhost:5001/lense-store/us-central1/api