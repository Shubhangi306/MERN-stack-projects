const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Category =require('./Category');

const ProductSchema = new Schema({
    productname:{
        type:String,
        required:[true ,'Category name is required!'],
        unique:true
    },
    description:{
        type:String,
        required:[true ,'Description is required!']
    },
    price:{
        type:Number,
        required:[true ,'price is required!']
    },
    category:{
        // type:mongoose.Schema.Types.ObjectId,
        // ref:Category
        type:String,
        required:[true ,'price is required!']
        
    }
    ,quantity:{
        type:Number,
        required:[true ,'quantity is required!']
    }
})

const product = mongoose.model('Product',ProductSchema);
module.exports=product;