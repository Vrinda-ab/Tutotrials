const express= require("express");
const app= express();
const path= require('path');
var http=require("http");
var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.set('views', path.join(__dirname,'views'))
app.set('view engine','hjs');

app.use("/static", express.static('./public/'));
app.use('/api',require('./apis/index'));


app.get('/',function(req, res){
    res.render("user");
})
app.get('/login', function(req, res){
    res.render("login");
})

var server = http.createServer(app)
server.listen(3000);