const express=require("express");
require("./src/db/connection");
const cors=require("cors");
const app=express();
const registration=require("./src/routers/registration");

app.use(express.json());
app.use(cors());

const PORT=5000;

app.use(registration);

app.listen(PORT,()=>{
    console.log("Server is running on PORT",PORT);
});