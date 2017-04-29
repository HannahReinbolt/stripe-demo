// const keyPublishable = process.env.PUBLISHABLE_KEY;
// const keySecret = process.env.SECRET_KEY;
const keyPublishable = "pk_test_6pRNASCoBOKtIshFeQd4XMUh";
const keySecret = "sk_test_BQokikJOvBiI2HlWgH4olfQ2";

const express = require("express");
const stripe = require("stripe")(keySecret);
const html = require("html");
const bodyParser = require("body-parser");

let app = express();

app.set('view engine', 'html');
app.set("/", __dirname + "/");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/", function(req, res){
    res.render("index",{
    });
}); 
app.get("/paysuccess", function(req, res){
    res.render("paysuccess",{
    });
});

app.post('/charge', function(req, res) {
    console.log(JSON.stringify(req.body, null, 2));
    var stripeToken = req.body.token.id;

    var charge = stripe.charges.create({
        amount: 5000, // amount in cents, again
        currency: "usd",
        source: stripeToken,
        description: "payinguser@example.com"
    }, function(err, charge) {
        if (err && err.type === 'StripeCardError') {
            console.log(JSON.stringify(err, null, 2));
        }
    });
    console.log("your payment was a success!")
    res.redirect("/paysuccess")
});

app.listen(8000, function(){
    console.log("stripe is running");
});