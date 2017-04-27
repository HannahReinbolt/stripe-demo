// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys

//environmental variables and libraries
const keyPublishable = process.env.PUBLISHABLE_KEY;
const keySecret = process.env.SECRET_KEY;

const app = require("express")();
const stripe = require("stripe")(keySecret); //or keySecret

//route handlers
app.get("/", (req, res) =>
  res.render("index", {keyPublishable}));

app.post("/charge", (req, res) => {
  let amount = 500;

  stripe.customers.create({
}).then(function(customer){
  return stripe.customers.createSource(customer.id, {
    source: {
       object: 'card',
       exp_month: exp_month,
       exp_year: exp_year,
       number: JSON.stringify(card-element),
       cvc: cvc
    }
  });
}).then(function(source) {
  return stripe.charges.create({
    amount,
    currency: 'usd',
    customer: source.customer
  });
}).then(function(charge) {
  // New charge created on a new customer
}).catch(function(err) {
  // Deal with an error
});
});

app.listen(4000, function(){
  console.log("Stripe runs!");
});

stripe.coupons.create({
  amount_off: 500,
  duration: 'forever',
  id: 'ACM'
}, function(err, coupon) {
  // asynchronously called
  console.log(coupon);
});

stripe.coupons.retrieve(
  "ACM",
  function(err, coupon) {
    // asynchronously called
    console.log(coupon);
  }
);