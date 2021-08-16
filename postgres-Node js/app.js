const express= require("express");
const app= express();
const path= require('path');
const http=require("http");
const bodyParser = require('body-parser')
// const {body, validationResult}=require('express-validator')
const jwt= require('jsonwebtoken')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname,'views'))
app.set('view engine','hjs');

app.use("/static", express.static('./public/'));
app.use('/api',require('./apis/index'));

// app.post('/validationCheck',
//     body('email', 'Invalid email id').isEmail(),
//     body('password','Password length should be 8 to 10 characters').isLength({min:8 , max:10}),
//     body('Age','Age should be between 1 to 99').isLength({min:1, max:2})
// ,tokenGeneration,(req, res)=>{
//     const error= validationResult(req);
//     console.log(error)
//     if(!error.isEmpty()){
//         return res.json({
//             status: false,
//             data:error.array()
//         })
//     }else{
//         return res.json({
//             status: true,
//             data: req.body,
//             message:"validation success"
//         })
//     }
// } )

app.post('/passwordValidation',
    body('passwordConfirmation').custom((value, { req }) => {
        console.log("value:",value)
        console.log("pswd:",req.body.password)
      if (value !== req.body.password) {
        throw new Error('Password confirmation does not match password');
      }
  
      // Indicates the success of this synchronous custom validator
      return true;
    }),
    (req, res) => {
      res.json({
          status:'ok'
      })
    },
  );

app.get('/',function(req, res){
    res.render("user");
})
app.get('/login', function(req, res){
    res.render("login");
})

// app.post('/api/login', (req,res)=>{
//     const user={
//         id:1,
//         username:"vrinda",
//         password:"123456789"
//     }
//     jwt.sign({user:user},'secretKey',(err, token)=>{
//         res.json({token})
//     })
// })

app.post('/api/posts',verifyToken,(req, res)=>{
    jwt.verify(req.token,'secretKey',(err, authData)=>{
        if(err){
            res.sendStatus(403)
        }else{
            res.json(authData)
        }
    })
    res.json('validation using jwt')
})

// function tokenGeneration(req, res, next){
//     console.log("validation:",req.body);
//     jwt.sign({user:req.body},'secretKey',(err, token)=>{
//         if(!err){
//             req.body.token=token;
//             //res.json({req.body});
//             next();
//         }else{
//             res.json('token generation error')
//         }
//     })
// }
function verifyToken(req, res, next){
    const bearerHeader= req.headers['authorization']
    if(bearerHeader!='undefined'){
        const bearerToken= bearerHeader.split(' ')[1]
        req.token= bearerToken;
        next();
    }else{
        res.sendStatus(403);
    }
}

var server = http.createServer(app)
server.listen(3000);