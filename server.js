const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(routes);

let shoppingCart = [{
        id: 1,
        product: "shoes",
        price: 15,
        quantity: 2
    }, {
        id: 2,
        product: "watermelons",
        price: 1,
        quantity: 25
    }, {
        id: 3,
        product: "phone",
        price: 400,
        quantity: 1
}];

app.listen(8100, () => {
    console.log("app running");
})