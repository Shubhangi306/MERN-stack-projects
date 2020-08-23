
module.exports=(err,req,res,next)=>{
    if(err.path==="_id"){
        res.status(404).send({"Error" : "Id not found or Invalid Id!!!", "Message":"Valid Id required"})
    }
    else{
        res.status(404).send({"Error":err.message});
    }
    

}