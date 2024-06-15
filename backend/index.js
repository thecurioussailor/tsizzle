const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require("dotenv");
dotenv.config();
app.use(express.static('public'));
app.use(express.json());
app.use(cors({
    origin: 'http://tsizzle.vercel.app',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204
}));

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);

const port = process.env.PORT

app.listen(port,() =>{
    console.log(`I am listening on ${port}`)
})