const {Cart, User} = require('../db/index')

const cartMiddleware = async (req, res, next) => {

    const username = req.username;
    const user = await User.findOne({username});
    const existingCart = await Cart.findOne({user});

    if (!existingCart) {
        // Create a new cart instance
        const newCart = new Cart({
            user: user._id,
            items: [],
            totalQuantity: 0,
            totalPrice: 0
        });

        // Save the new cart to the database
        await newCart.save();

        // Attach the new cart to the request object for further processing if needed
        req.cart = newCart;
        return next();
    }
    req.cart = existingCart;

    next();
}

module.exports = cartMiddleware;