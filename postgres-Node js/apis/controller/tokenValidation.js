const jwt= require('jsonwebtoken')

function tokenGeneration(req, res, next){
    console.log("validation:",req.body);
    jwt.sign({user:req.body},'secretKey',(err, token)=>{
        if(!err){
            req.body.token=token;
            //res.json({req.body});
            next();
        }else{
            res.json('token generation error')
        }
    })
}

module.exports={
    tokenGeneration
}