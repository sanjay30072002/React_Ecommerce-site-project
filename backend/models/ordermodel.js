const mongoose = require("mongoose");

const orderschema =  new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdat:Date
})

const ordermodel=mongoose.model("Order",orderschema);

module.exports=ordermodel;