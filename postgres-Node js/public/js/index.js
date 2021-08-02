function submit(){
    var fname= document.getElementById("fname").value
    var lname=document.getElementById("lname").value
    var emailId=document.getElementById("emailId").value
    var age =document.getElementById("ageId").value
    var pswdId= document.getElementById("pswdId").value
    var data={
        firstName:fname,
        lastName: lname,
        email: emailId,
        Age: age,
        password: pswdId
    }
    $.ajax({
        type:"POST",
        contentType:"application/json",
        url:'api/getUserDetails',
        data:JSON.stringify(data),
        dataType:"json",
        success:function(response){
            if(response.status==true){
                alert("Success")
            }else{
                alert("Something went wrong")
            }
        },
        error:function(e){
            console.log("error:",e)
        }
    });
}

function LogIn(){
    var email =document.getElementById("LogEmail").value
    var pswdId= document.getElementById("logPswd").value
    var data={
        email: email,
        password: pswdId
    }
    $.ajax({
        type:"POST",
        contentType:"application/json",
        url:'api/loginUser',
        data:JSON.stringify(data),
        dataType:"json",
        success:function(response){
            if(response.status==true){
                alert("success login")
            }else{
                alert("Invalid username or password")
            }
        },
        error:function(e){
            console.log("error:",e)
        }
    });
}