const express = require("express");
const app = express();
const models = require("../models");
const customer = models.customer;
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json())


app.post('/loginData',async(req,res) =>{

    console.log("req.body",req.body)
    const dbPassword = await customer.findOne({
        where:{
            email:req.body.email
        },attributes:['password']
    })
    console.log("Password in the database",dbPassword.password)
    const token = bcrypt.compareSync(req.body.password,dbPassword.password)
    console.log("token",token)
    res.send(token)
})

app.get("/email",async(req,res)=>{
    const email = await customer.findAll({attributes:['email']})
    console.log("emaoi",email)
    res.send(email)
})

console.log("good tot gos")
app.listen(8000)