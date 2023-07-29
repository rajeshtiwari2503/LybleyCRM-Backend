const express=require("express");
require("./src/db/connection");
const cors=require("cors");
const app=express();
const registration=require("./src/routers/registration");
const brandProduct=require("./src/routers/brandProduct");
const brandProductCategory=require("./src/routers/brandProductCategory");

app.use(express.json());
app.use(cors());

const PORT=5000;

app.use(registration);
app.use(brandProduct);
app.use(brandProductCategory);

app.listen(PORT,()=>{
    console.log("Server is running on PORT",PORT);
});