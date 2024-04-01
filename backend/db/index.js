const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://callmetomashu111:qSlTddLCi31XqamJ@cluster1.e3zwhtb.mongodb.net/tsizzledb');

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
    age:  Number
});

const ProductSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number,
    color: String,
    tag: String,
    size: [String]
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
