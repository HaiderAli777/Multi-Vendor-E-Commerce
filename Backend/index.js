const express=require("express");
const database=require("../Backend/database/database");
const dotenv = require("dotenv");
const path=require("path");
const app=express();
dotenv.config({path:path.join(__dirname,"../config/.env")});
database();
app.listen(5000,(req,res)=>
{
    console.log("hey server started");
})