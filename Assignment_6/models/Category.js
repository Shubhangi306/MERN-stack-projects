const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const CategorySchema = new Schema({
    categoryname:{
        type:String,
        required:[true ,'Category name is required!'],
        unique:true
    }
})

const category = mongoose.model('Category',CategorySchema);


module.exports=category;
