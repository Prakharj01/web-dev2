const express=require("express")
const parser=require("body-parser")

var app=express()
app.use(parser.urlencoded({extended:true}))

app.listen("2500",function(){
    console.log("Server started on port 2500")
})

app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html");
});


app.post("/",function(req,res){
var height=Number(req.body.height)
var weight=Number(req.body.weight)

var bmic=(weight)/(height*height)

res.send("Your bmi is "+bmic)

})