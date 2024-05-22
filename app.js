const express=require("express");
require("./src/db/connection");
require("dotenv").config();
const cors=require("cors");
const app=express();
const registration=require("./src/routers/registration");
const product=require("./src/routers/product");
const productCategory=require("./src/routers/productCategory");
const complaintNature=require("./src/routers/complaintNature");
const sparePart=require("./src/routers/sparePart");
const complaint=require("./src/routers/complaint");
const location=require("./src/routers/location");

app.use(express.json());
app.use(cors());

const PORT=process.env.PORT || 5000;

app.use(registration);
app.use(product);
app.use(productCategory);
app.use(complaintNature);
app.use(sparePart);
app.use(complaint);
app.use(location);

app.listen(5000,()=>{
    console.log("Server is running on PORT",PORT);
});