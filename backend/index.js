const express = require('express');
const cors = require('cors');
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cors());

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