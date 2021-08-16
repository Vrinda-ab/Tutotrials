const express= require('express');
const router = express.Router();
const {body, validationResult}=require('express-validator')
const{
    getUser,
    login
}=require('./controller/index')
const {
    tokenGeneration
}= require('./controller/tokenValidation')

router.post("/getUserDetails",getUser);
router.post("/loginUser",login)
//router.post('/validationCheck',loginJwt)  
router.post('/validationCheck',
    body('email', 'Invalid email id').isEmail(),
    body('password','Password length should be 8 to 10 characters').isLength({min:8 , max:10}),
    body('Age','Age should be between 1 to 99').isLength({min:1, max:2})
,tokenGeneration,getUser,(req, res)=>{
    const error= validationResult(req);
    console.log(error)
    if(!error.isEmpty()){
        return res.json({
            status: false,
            data:error.array()
        })
    }else{
        return res.json({
            status: true,
            data: req.body,
            message:"validation success"
        })
    }
})

module.exports=router;