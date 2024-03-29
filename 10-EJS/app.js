const express =require('express')
const parser=require('body-parser')

const date=require(__dirname+"/date.js")

const app=express()
var items=["Buy Food","Cook Food","Eat Food"]
var workItems=[]

app.use(parser.urlencoded({extended:true}));
app.use(express.static("public"));

app.set("view engine","ejs");

app.get("/",function(req,res){

    var day=date.getDate();
res.render("list",{
    listTitle:day,
    newListItems:items
})
});

app.listen("3000",function(){
console.log("Server started on port 3000");
})


app.post("/",function(req,res){
    let item=req.body.newItem;
    if (req.body.list=="Work-List"){
        workItems.push(item)
        res.redirect("/work")
    }
    else{
        items.push(item)
        res.redirect("/");
    
    }
    
})

app.get("/work",function(req,res){
    res.render("list",{
        listTitle:"Work-List",
        newListItems:workItems
    })
})


app.get("/about",function(req,res){
    res.render("about")
})
