const express = require("express");
const app = express();
const models = require("../models");
const sellers = models.seller;
const prdcat = models.productCategory;
const customer = models.customer;
const prd = models.product;
const bodyParser = require("body-parser");
const { authSchema } = require('../validationSchema/auth.validation')


app.use(bodyParser.json());


app.post('/user',async(req,res)=>{

    const records = await sellers.bulkCreate(req.body);
    res.send(res);

})

app.post('/product',async(req,res)=>{
    
  const data1 = await sellers.findAll({
    where:{
        name:["anand","dhwani"]
    }
})

const records = await prd.create(req.body)
console.log("records",records)

const data = records.addSellers(data1)
console.log("data",data)

  res.send(records);
})

app.post('/category',async(req,res) =>{

    const data = await prdcat.bulkCreate(req.body)
})


app.post('/customer',async(req,res) =>{
 
    const data = authSchema.validate(req.body)
    console.log("data",data)
    const customerData = await customer.create(data.value)
    // res.send("customerData",customerData)
})



console.log("good to go")

app.listen(8000)