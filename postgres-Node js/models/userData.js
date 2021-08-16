var Sequelize = require('sequelize');
var sequelize= require('../database/config');

var user= sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    email: Sequelize.STRING,
    Age: Sequelize.INTEGER,
    password: Sequelize.STRING,
    token: Sequelize.STRING
});

module.exports=user;