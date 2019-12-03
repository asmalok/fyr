const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_ZxdMLN8pmsLfOyF4u8WIeKuk00LXy4AZIG");

exports.Charge = functions.https.onRequest(async (req, res) => {
  const token = req.body.stripeToken; // Using Express
  const totalAmount = parseInt(req.body.amount);
  return charge(totalAmount, token);
});

async function charge(amount, token) {
  const charge = await stripe.charges.create({
    amount: amount,
    currency: "cad",
    // description: "Example charge",
    source: token
  });
  return charge;
}
exports.CreateCustomer = functions.https.onRequest(async (req, res) => {
  const token = req.body.stripeToken; // Using Express
  const email = req.body.email;
  const customer = await stripe.customers.create({
    source: token,
    email: email,
  });
  res.json(customer)
});
