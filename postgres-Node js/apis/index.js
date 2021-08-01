const express= require('express');
const router = express.Router();

const{
    getUser,
    login
}=require('./controller/index')

router.post("/getUserDetails",getUser);
router.post("/loginUser",login)
module.exports=router;