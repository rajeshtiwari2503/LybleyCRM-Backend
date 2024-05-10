const express=require("express");
require("./src/db/connection");
const cors=require("cors");
const app=express();
const registration=require("./src/routers/registration");
const product=require("./src/routers/product");
const productCategory=require("./src/routers/productCategory");
const complaintNature=require("./src/routers/complaintNature");
const sparePart=require("./src/routers/sparePart");

app.use(express.json());
app.use(cors());

const PORT=5000;

app.use(registration);
app.use(product);
app.use(productCategory);
app.use(productCategory);
app.use(complaintNature);
app.use(sparePart);

app.listen(PORT,()=>{
    console.log("Server is running on PORT",PORT);
});