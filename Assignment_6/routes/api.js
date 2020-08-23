const express = require('express');
const User =require('../models/User');
const Category =require('../models/Category');
const Product =require('../models/Product');
const { request, response } = require('express');
const { findByIdAndUpdate } = require('../models/User');
const category = require('../models/Category');


const routes = express.Router();

// *****************/ for Users Schema /********************//

routes.get('/api/users/allusers',(req,res,next)=>{
    User.find({}).then(users=>{
        res.send(users);

    })
})

routes.get('/api/users/finduser/:id',(req,res,next)=>{
    User.findById({_id:req.params.id}).then(users=>{
        res.send(users);

    }).catch(next);
})

routes.post('/api/users/createuser',(req,res,next)=>{
    console.log(req.body);
    User.create(req.body).then(data=>{
        res.send({"created":data});
    }).catch(next);
})

routes.put('/api/users/updateuser/:id',(req,res,next)=>{
    User.findByIdAndUpdate({_id:req.params.id},{name:req.body.name},{useFindAndModify:false, new:true})
    .then( data =>{
        res.status(200).send({"updated": data})
    }).catch(next);
})

routes.delete('/api/users/deleteuser/:id',(req,res,next)=>{
    User.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false})
    .then( data =>{
        res.send({"deleted":data})
    }).catch(next);
})


// *****************/ for Categories Schema /********************//


routes.get('/api/categories/allcategories',(req,res,next)=>{
    Category.find({}).then(categories=>{
        res.send(categories);

    })
})

routes.get('/api/categories/category/:id',(req,res,next)=>{
    Category.findById({_id:req.params.id}).then(data=>{
        res.send(data);

    }).catch(next);
})

routes.post('/api/categories/category',(req,res,next)=>{
    console.log(req.body);
    Category.create(req.body).then(data=>{
        res.send({"created":data});
    }).catch(next);
})

routes.put('/api/categories/:id',(req,res,next)=>{
    console.log(req.body);
    Category.findByIdAndUpdate({_id:req.params.id},{categoryname:req.body.categoryname},{useFindAndModify:false, new:true})
    .then( data =>{
        res.status(200).send({"updated": data})
    }).catch(next);
})

routes.delete('/api/categories/:id',(req,res,next)=>{
    Category.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false})
    .then( data =>{
        res.send({"deleted":data})
    }).catch(next);
})

// *****************/ for Products Schema /*******************//

routes.get('/api/products/allproducts',(req,res,next)=>{
    Product.find({}).then(data=>{
        res.send(data);

    })
})

routes.get('/api/products/product/:id',(req,res,next)=>{
    Product.findById({_id:req.params.id}).then(data=>{
        res.send(data);

    }).catch(next);
})

routes.post('/api/products/product',(req,res,next)=>{
    Product.create(req.body).then(data=>{
        res.send({"created":data});
    }).catch(next);
})

routes.put('/api/products/:id',(req,res,next)=>{
    Product.findByIdAndUpdate({_id:req.params.id},{productname:req.body.productname},{useFindAndModify:false, new:true})
    .then( data =>{
        res.status(200).send({"updated": data})
    }).catch(next);
})

routes.delete('/api/products/:id',(req,res,next)=>{
    Product.findByIdAndDelete({_id:req.params.id},{useFindAndModify:false})
    .then( data =>{
        res.send({"deleted":data})
    }).catch(next);
})

// routes.get('/api/products/allproductsbycategoryid/:categoryid',(req,res,next)=>{
//     Category.findById({_id:req.params.categoryid}).then(category=>{
//         res.send(category.products);

//     }).catch(next);
// })

// routes.get('/api/products/productsbyid/:categoryid/:productid',(req,res,next)=>{
//     Category.findById({_id:req.params.categoryid})
//     .select({products:{$elemMatch:{_id:req.params.productid}}}).then(category=>{
//          res.send(category);

//     }).catch(next);
// })


// routes.post('/api/products/addproductbycategoryid/:categoryid',(req,res,next)=>{
//     Category.findByIdAndUpdate({_id:req.params.categoryid, products:{_id:req.params.productid}}
//         ,{$push : {products:{productname:req.body.productname
//             , description:req.body.description,price:req.body.price,category:req.body.category}}}
//         ,{ useFindAndModify :false , safe:true, new:true, upsert: true})
//         .then( data =>{
//             res.status(200).send(data)
//         }).catch(next);

//     })
   

// routes.put('/api/products/:categoryid/:productid',(req,res,next)=>{
//     Category.findByIdAndUpdate({_id:req.params.categoryid ,products:{$elemMatch:{ _id:req.params.productid}}}
//     ,{$set : {products:{productname:req.body.productname
//         , description:req.body.description,price:req.body.price,category:req.body.category,quantity:req.body.quantity}}}
//     ,{ useFindAndModify :false , safe:true, new:true, upsert: false})
//     .then( data =>{
//         res.status(200).send({"updated": data})
//     }).catch(next);
// })

// routes.delete('/api/products/:categoryid/:productid',(req,res,next)=>{
//     Category.findByIdAndUpdate({_id:req.params.categoryid},{$pull : { products:{_id:req.params.productid}}}
//         ,{ safe: true, upsert: true, useFindAndModify :false})
//     .then(category=>{
//         res.send(category);

//    }).catch(next)
// })



module.exports=routes;
