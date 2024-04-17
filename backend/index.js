const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");
const cartRouter = require("./routes/cart");

app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/cart", cartRouter);

app.listen(3000,() =>{
    console.log("I am listening on 3000")
})