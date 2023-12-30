function logError(err, req, res, next){

  next(err);
};

function boomErrorHandler(err,req,res,next){
  console.log('aca')
  if(err.isBoom){

    const {output} = err;
    res.status(400).json(output.payload)
  }else{
    next(err)
  }
}

function errorHandler(err,req,res,next){
  res.status(400).json({
  message:err.message,
  stack:err.stack

})

}





module.exports={logError, errorHandler, boomErrorHandler}
