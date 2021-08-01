var Sequelize = require('sequelize');
var sequelize= require('../database/config');

var user= sequelize.define('users',{
    // userId:{
    //     type:Sequelize.INTEGER,
    //     autoIncrement:true,
    //     primaryKey: true
    // },
    // firstName:Sequelize.STRING,
    // lastName: Sequelize.STRING,
    // email: Sequelize.STRING,
    // Age: Sequelize.INTEGER
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
    },
    firstName:Sequelize.STRING,
    lastName:Sequelize.STRING,
    email: Sequelize.STRING,
    Age: Sequelize.INTEGER,
    password: Sequelize.STRING
});

module.exports=user;