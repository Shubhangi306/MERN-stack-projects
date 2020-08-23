const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema=new Schema({
    productname:String
})

const PurchaseHistorySchema = new Schema({
    products:[productSchema],
    quantity:Number,
    billAmount:Number
})

const UserSchema = new Schema({
    name:{
        type:String,
        required:[true ,'Username is required!'],
        unique:true
    },
    email:{
        type:String,
        required:[true ,'Email is required!']
    },
    password:{
        type:String,
        required:[true ,'Password is required!']
    },
    purchaseHistory:[PurchaseHistorySchema]
})

const user = mongoose.model('User',UserSchema);
module.exports=user;