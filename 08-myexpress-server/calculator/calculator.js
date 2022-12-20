const express1=require("express")
const parser=require("body-parser")

const app2=express1()
app2.use(parser.urlencoded({extended:true}))

app2.listen("3000",function(){
    console.log("Server started in port 3000")
})

app2.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")       //dirname is the path of the current file here calculator.js
})

app2.post("/",function(req,res){
  
 //   console.log(req);
    var n1=Number(req.body.num1)
    var n2=Number(req.body.num2)

    var result=n1+n2
    res.send("The sum of num1 and num2 is "+result)

});