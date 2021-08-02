var user= require('../../models/userData')

const inserUser = async function inserUserData(params){
   // console.log("params: service:..",params)
    let data= user.create(params);
    return new Promise((resolve, reject)=>{
        return(data)? resolve(data):reject(false);
    });
}
const loginData = async function loginData(params){
   // console.log(params);
    let data = user.findOne({
        where :{
            email: params.email,
            password: params.password
        }
    })
    return new Promise((resolve, reject)=>{
        return(data)? resolve(data):reject(false);
    });
}

module.exports={
    inserUser,
    loginData
}