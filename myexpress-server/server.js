const express=require("express")
const app=express()


app.get("/",function(request,response){         //request and response can be any variables
//console.log(request)

response.send("<h1>Hello World</h1>")
response.send("Hello")

});
app.listen(1000,function(){
    console.log("Server started on port 1000")
})

app.get("/contact",function(req,res){
res.send("You can contact me at abc@gmail.com")
});

app.get("/about",function(req,res){
    res.send("My name is Prakhar Jain. I belong to Raipur, Chattisgarh")
})