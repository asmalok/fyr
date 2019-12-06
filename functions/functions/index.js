const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_ZxdMLN8pmsLfOyF4u8WIeKuk00LXy4AZIG");
const cors = require('cors')({ origin: true });

exports.Charge = functions.https.onRequest(async (req, res) => {
  const customer_id = req.body.customer_id; // Using Express
  const amount = parseInt(req.body.amount);
  const charge = await stripe.charges.create({
    amount: amount,
    currency: "cad",
    // description: "Example charge",
    customer: customer_id
  });
  cors(req, res, () => {
    res.json(charge)
  })
});

exports.CreateCustomer = functions.https.onRequest(async (req, res) => {
  const token = req.body.stripeToken; // Using Express
  const email = req.body.email;
  const customer = await stripe.customers.create({
    source: token,
    email: email,
  });
  cors(req, res, () => {
    res.json(customer)
  })
});
