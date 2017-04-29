// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;
const keyPublishable = "pk_test_6pRNASCoBOKtIshFeQd4XMUh";
const keySecret = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";

const bodyParser = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", (req, res) =>
  res.render("index.html", {keyPublishable}));

app.post("/charge", (req, res) => {
  let amount = 500;
  
  // Token is created using Stripe.js or Checkout!
// Get the payment token submitted by the form:
var token = request.body.stripeToken.id; // Using Express

// Create a Charge:
stripe.charges.create({
  amount,
  currency: "usd",
  source: token,
}, {
  stripe_account: "{CONNECTED_STRIPE_ACCOUNT_ID}",
})
  .then(charge => res.send(charge))
  .catch(err => {
    console.log("Error:", err);
    res.status(500).send({error: "Purchase Failed"});
  });
  console.log("Success!");
});

app.listen(8000);