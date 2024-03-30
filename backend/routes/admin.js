const express = require('express');

const adminMiddleware = require('../middleware/admin');
const jwt = require('jsonwebtoken');
const { Admin, User } = require('../db')
const { Product } = require('../db')
const {JWT_SECRET} = require('../config')

const router = express.Router();

router.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const findAdmin = await Admin.findOne({
        username
    })
    if(!findAdmin){
        await Admin.create({
            username: username,
            password: password
        })
    
        res.json({
            msg: "Admin created successfully"
        })
    } else {
        res.json({
            message: "User Already exist"
        })
    }
    

});

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    const admin = await Admin.findOne({
        username,
        password
    });
    console.log(admin);

    if(admin){
        const token = jwt.sign({
            username
        }, JWT_SECRET);
    
        res.json({
            token
        });
    } else {
        res.status(411).json({
            message: "Incorrect email or password."
        })
    }
})

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