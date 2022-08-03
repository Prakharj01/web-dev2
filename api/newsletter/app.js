const express=require("express");
const app=express();
const parser=require("body-parser");
const request=require("request");
app.use(parser.urlencoded({extended:true}))

app.use(express.static("public"))



app.listen("3000",function(){
    console.log("Server is running on port 3000")
})

app.get("/",function(req,res){
    res.sendFile(__dirname+"/signup.html");
})

app.post("/",function(req,res){

const fname=req.body.inputfname;
const lname=req.body.inputlname;
const email=req.body.inputemail;

console.log(fname+lname+email)
});

//83ea792ab3c0b9a074a16075a1174c01-us9