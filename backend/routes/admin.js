const express = require('express');

const adminMiddleware = require('../middleware/admin');

const { Admin } = require('../db')
const { Product } = require('../db')

const router = express.Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    await Admin.create({
        username: username,
        password: password
    })

    res.json({
        msg: "Admin created successfully"
    })

});

router.post('/products', adminMiddleware, async (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const color = req.body.color;
    const size = req.body.size;

    const newProduct = await Product.create({
        title,
        description,
        imageLink,
        price,
        color,
        size
    })

    res.json({
        message: "Product created successfully",
        ProductId: newProduct._id
    })
})

module.exports = router;