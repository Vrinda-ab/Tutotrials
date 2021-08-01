const{
    inserUser,
    loginData
}=require('../services/index')

const getUser= async function getUser(req, res, next){
    try{
        let body = req.body;

        let result= await inserUser(body)
        if(result){
            let data={
                status: true,
                data: result
            }
            res.status(200);
            res.json(data);
        }else{
            let data={
                status: false,
                data:"Failed"
            }
            res.status(200);
            res.json(data);
        }
    }catch(e){
        let err= new Error(e);
        err.status=500;
        next(err);
    }
}

const login = async function login(req, res, next){
    try{
        var data= req.body;
        var result = await loginData(data);
        if(result==null){
            let data={
                status: true,
                data: result
            }
            res.status(200);
            res.json(data);
        }else{
            let data={
                status: false,
                data:"Failed"
            }
            res.status(200);
            res.json(data);
        }
    }catch(e){
        let err= new Error(e);
        err.status=500;
        next(err);
    }
}

module.exports={
    getUser,
    login
}