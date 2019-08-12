const express = require('express');

const router = express.Router();

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

router.get("/cart-items", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.json(shoppingCart);
    res.end();
});

router.post("/cart-items", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.body);
    res.end();
});

router.put("/cart-items/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.params.id);
    console.log(req.body);
    res.end();
});

router.delete("/cart-items/:id", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    console.log(req.params.id);
    console.log(req.body);
    res.end();
});

module.exports = router;