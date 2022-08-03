const express1=require("express")
const parser=require("body-parser")

const app=express1()
app.use(parser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")       //dirname is the path of the current file here calculator.js
})

app.post("/",function(req,res){
  
    var n1=Number(req.body.num1)
    var n2=Number(req.body.num2)

    var result=n1+n2
    res.send("The sum of num1 and num2 is "+result)

});

app.listen("3000",function(){
    console.log("Server started in port 3000")
})