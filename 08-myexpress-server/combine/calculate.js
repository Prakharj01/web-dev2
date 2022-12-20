const express1=require("express")
const parser=require("body-parser")

const app=express1()
app.use(parser.urlencoded({extended:true}));

app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")       //dirname is the path of the current file here calculator.js
})

app.get("/bmicalculator",function(req,res){
    res.sendFile(__dirname+"/bmi.html")       //dirname is the path of the current file here calculator.js
})

app.post("/",function(req,res){
  
    var n1=Number(req.body.num1)
    var n2=Number(req.body.num2)

    var result=n1+n2
    res.send("The sum of num1 and num2 is "+result)

});
app.post("/bmicalculator",function(req,res){
  
var height=parseFloat(req.body.height)
var weight=parseFloat(req.body.weight)

var bmic=(weight)/(height*height)

res.send("Your bmi is "+bmic)

});

app.listen("3000",function(){
    console.log("Server started in port 3000")
})