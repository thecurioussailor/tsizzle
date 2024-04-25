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
    const gender = req.body.gender;
    const phone = req.body.phone;
    const dob = req.body.dateOfBirth;
    console.log(dob);
    const user = await User.create(req.body);

    res.status(201).json({
        message: "User created successfully",
        user
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
});

router.get('/profile', userMiddleware, async (req, res) => {

    try {
        const username = req.username;
        const user = await User.findOne({
            username
        }).select('-_id -__v')

        if(!user){
            res.status(404).json({
                message: "User not found!"
            })
        }

        res.json({
            user
        });
        
    } catch (error) {
        res.status(500).json({
            msg: "Error fetching user details.",
            error: error.message
        })
    }
});

router.put('/update', userMiddleware, async (req, res) =>{

    try{
        const username = req.username;
        const updates = req.body;

        const user = await User.findOne({
            username
        });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        if (Object.keys(updates).length === 0) {
            return res.status(400).json({ message: 'No updates provided' });
        }

        Object.keys(updates).forEach((key) => {
            user[key] = updates[key];
        });

        console.log("Updated user before saving:", user);

        await user.save();

        const updatedUser = await User.findOne({ username }).select('-_id -__v'); // Exclude _id and __v
        res.json({
            message: 'User details updated successfully',
            user: updatedUser
        });

    } catch (error) {
        res.status(500).json({
            message: 'Error updating user details',
            error: error.message
        });
    }

})



module.exports = router;