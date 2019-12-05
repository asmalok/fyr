// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
const stripe = require("stripe")("sk_test_ZxdMLN8pmsLfOyF4u8WIeKuk00LXy4AZIG");
// cus_GIIe03eRktU0XD
(async () => {
  // Create a Customer:
  //   const customer = await stripe.customers.create({
  //     source: "tok_1Fli2HDCvRDFjUhRfiamDOuK",
  //     email: 'paying.user@example.com',
  //   });
  //   console.log(customer)

  // Charge the Customer instead of the card:
  const charge = await stripe.charges.create({
    amount: 30000,
    currency: "cad",
    customer: "cus_GIIe03eRktU0XD"
  });
  console.log(charge);

  // YOUR CODE: Save the customer ID and other info in a database for later.
})();

// (async () => {
//   // When it's time to charge the customer again, retrieve the customer ID.
//   const charge = await stripe.charges.create({
//     amount: 1500, // $15.00 this time
//     currency: 'usd',
//     customer: customer.id, // Previously stored, then retrieved
//   });
// })();
