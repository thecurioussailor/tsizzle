const express = require("express");

const { User } = require("../db");

const router = express.Router();

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

module.exports = router;