const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require ("stripe")('sk_test_51JRak6SAhmwRshLNdoWB5YdWXzmQYsT6yCuYregdk2hDFR6o9C8yndYTPC28tU3fumZVsoHgY1zobAXxtTLpt3Hs00pdPnr5bY')
//API

// app config
const app = express();

//middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request,response)=> response.status(200).send('hello world'))

app.post('/payments/create', async (request, response) => {
    const total = request.total.query;
    console.log('Payment Request received!!!', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount: total, //subunits of the currency
        currency: "rupee",
    })

    //Ok created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

//http://localhost:5001/app-50f10/us-central1/api


//listen command
exports.api = functions.https.onRequest(app)