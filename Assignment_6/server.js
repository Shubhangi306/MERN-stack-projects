const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/api');
const error = require('./errorHandler/error');

const app =express();

mongoose.connect('mongodb://localhost/myEcommerceApi',{ useNewUrlParser: true , useUnifiedTopology: true });
mongoose.connection.once('open', () =>{
    console.log("Connected!!");
});

app.use(bodyParser.json());

app.use(routes);

app.use(error);



app.listen(process.env.port || 3001 ,'127.0.0.1',()=>{
    console.log("listening at port 3001");
})