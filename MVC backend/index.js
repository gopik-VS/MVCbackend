//importing
const express = require('express')
const dotenv = require("dotenv")
const ProductRoutes=require("./routes/productroutes")


// initialize
const app =express()
dotenv.config()
require("./config/database")

//mid 
app.use(express.json());

//useroutes
app.use("/api/products",ProductRoutes)

//port setting
const PORT = process.env.PORT

app.listen(PORT,()=> {
    console.log(`port is running  ${PORT}`);
});