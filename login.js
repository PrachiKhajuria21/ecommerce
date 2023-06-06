const express = require("express");
const app = express();
const models = require("../models");
const customer = models.customer;
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const cookie = require('cookies')
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.post('/loginData',async(req,res) =>{

    // console.log("req.body",req.body)
    const dbPassword = await customer.findOne({
        where:{
            email:req.body.email
        },attributes:['password','name']
    })
    // console.log("Password in the database",dbPassword.password)
    const decryptpwd = bcrypt.compareSync(req.body.password,dbPassword.password)
    // console.log("token",decryptpwd)
let token ;
    if(decryptpwd == true)
    {
        console.log("hello")
        token = jwt.sign(dbPassword.name,"prachi")
        console.log("token,token",token)
        // res.cookie("authCookie",token)
    }
    console.log("sending token",token)
    res.send({decryptpwd,token})
})

app.get("/email",async(req,res)=>{
    const email = await customer.findAll({attributes:['email']})
    // console.log("emaoi",email)
    res.send(email)
})

console.log("good tot gos")
app.listen(8000)