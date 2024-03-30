const express = require("express");
const userMiddleware = require('../middleware/user')
const { User } = require("../db");
const jwt = require('jsonwebtoken')
const router = express.Router();
const {JWT_SECRET} = require('../config')

router.post('/signup', async (req,res) =>{

    const username = req.body.username;
    const password = req.body.password;
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const age = req.body.age;

    await User.create({
        username,
        password,
        firstName,
        lastName,
        age
    })

    res.json({
        message: "User created successfully"
    })
    
})

router.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    console.log(username);
    const user = await User.findOne({
        username,
        password
    });
    console.log(user);

    if(user){
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
module.exports = router;