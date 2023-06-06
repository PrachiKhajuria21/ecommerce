const express = require("express");
const app = express();
const models = require("../models");
const customer = models.customer;
const cors = require("cors");
var bcrypt = require("bcryptjs");
app.use(cors());

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const { authSchema } = require('../validationSchema/auth.validation')


app.post('/register',async(req,res) =>{

    console.log("req.body",req.body)

   
 
    const data = authSchema.validate(req.body)
    console.log("data",data.value.password)
    const hash = bcrypt.hashSync(data.value.password,10)
    console.log("hash",hash)
    const customerData = await customer.create({name :`${data.value.name}`,email:`${data.value.email}`,password:`${hash}`,address:`${data.value.address}`,phoneNumber:`${data.value.phoneNumber}`})
    console.log("dataaaaaaaaa",customerData)
    
    res.send(data)
   
})

app.get("/email",async(req,res)=>{
    const email = await customer.findAll({attributes:['email']})
    console.log("emaoi",email)
    res.send(email)
})



console.log("good to go")

app.listen(8000)