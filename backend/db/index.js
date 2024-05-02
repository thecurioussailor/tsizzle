const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();

const dburl = process.env.DB_URL;

// Connect to MongoDB
mongoose.connect(dburl);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    age:  Number,
    gender: String,
    phone: Number,
    dateOfBirth: {
        type: Date,
        set: function(v) {
            if (typeof v === 'string') {
                // Convert string to Date object
                return new Date(v);
            }
            // Set the time to 00:00:00
            v.setHours(0, 0, 0, 0);
            return v;
        }
    }
});

const ProductSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: [String],
    price: Number,
    color: String,
    tag: String,
    size: [String],
    isPublished: Boolean
});

const CartSchema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    items: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId, 
                ref: 'Product'
            },
            quantity: Number,
            size: String,
            color: String,
            price: Number
        }
    ],
    totalQuantity: Number,
    totalPrice: Number
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);
const Cart = mongoose.model('Cart', CartSchema)
module.exports = {
    Admin,
    User,
    Product,
    Cart
}
