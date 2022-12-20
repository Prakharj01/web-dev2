
const express =require('express')
const parser=require('body-parser')

const app=express()

app.set("view engine","ejs");
app.get("/",function(req,res){
var today=new Date();
var currentDay=today.getDay();
var day=""
 
switch(currentDay){
    case 1:
        day="Monday"
        break;
    case 2:
        day="Tuesday";
        break;
    case 3:
        day="Wednesday";
        break;
    case 4:
        day="Thursday";
        break;
    case 5:
        day="Friday";
        break;
    case 6:
        day="Saturday";
        break;
    default:
        res.write("<h1>The currentDay is not defined</h1>")

}


res.render("list",{
    typeOfDay:day
})
});

app.listen("3000",function(){
console.log("Server started on port 3000");
})