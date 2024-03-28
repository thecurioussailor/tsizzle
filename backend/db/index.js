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
    age:  Number,
    wishlist: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]
});

const ProductSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    imageLink: String,
    price: Number,
    color: String,
    size: [String]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Product = mongoose.model('Product', ProductSchema);

module.exports = {
    Admin,
    User,
    Product
}
