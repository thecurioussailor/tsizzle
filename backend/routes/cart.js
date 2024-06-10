const express = require('express');
const router = express.Router();
const { User, Product, Cart } = require('../db/index');
const userMiddleware = require('../middleware/user');
const cartMiddleware = require('../middleware/cart');
const dotenv = require("dotenv");
dotenv.config();
const stripe = require("stripe")(process.env.STRIPE_SECRET)

router.post('/add', userMiddleware, cartMiddleware, async (req, res) => {
    try {
        console.log("add to cart get called!")
        const username = req.username;
        const { productId, quantity, size, color } = req.body;

        // Validate request body
        if (!productId || !quantity || !size || !color) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Find the product
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        // Get the cart from the request object
        const cart = req.cart;

        // Check if the product already exists in the cart items
        const existingProductIndex = cart.items.findIndex(item => 
            item.product.toString() === productId && 
            item.size === size && 
            item.color === color
        );

        if (existingProductIndex !== -1) {
            // If product already exists, update its quantity
            cart.items[existingProductIndex].quantity += parseInt(quantity);
        } else {
            // If product does not exist, add it to the cart
            cart.items.push({
                product: productId,
                quantity: parseInt(quantity),
                size,
                color,
                price: product.price // Assuming product has a price field
            });
        }

        // Update totalQuantity and totalPrice
        cart.totalQuantity += parseInt(quantity);
        cart.totalPrice += parseInt(quantity) * product.price;

        // Save the updated cart to the database
        await cart.save();

        // Populate the product details in the cart items
        const populatedCart = await Cart.findById(cart._id).populate('items.product');

        // Send response with the updated cart
        res.status(200).json(populatedCart);

    } catch (error) {
        console.error('Error in /add route:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
router.get("/", userMiddleware, cartMiddleware, async (req, res) =>{
    try{
        
        const username = req.username;
        const cart = req.cart;
        const populateCart = await Cart.findById(cart._id).populate('items.product');

        res.status(200).json(populateCart);

    } catch (error) {
        console.log("error ", error);
        return res.status(500).json({message: "Internal server error"})
    }
})

router.post("/create-checkout-session", userMiddleware, async (req, res) => {
    const products = req.body.products;
    const user = req.username;
    console.log(req.body);
    console.log(products);
    const lineItems = products.map((item) => ({
        price_data: {
            currency:"inr",
            product_data:{
                name: item.product.title,
                images: [item.product.imageLink[0]]
            },
            unit_amount: Math.round(item.price)*100,
        },
        quantity: item.quantity
    }))


    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        line_items: lineItems,
        mode: "payment",
        success_url:"http://localhost:5173/success",
        cancel_url:"http://localhost:5173/cancel"
    });

    // res.redirect(303, session.url);
    res.json({
        id:session.id
    })
})

module.exports = router;
