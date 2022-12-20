const express=require("express")

const app=express()
const https=require("https")
const parser=require("body-parser");
app.use(parser.urlencoded({extended:true}));
app.get("/",function(req,res){
res.sendFile(__dirname+"/index.html")
})

app.post("/",function(req,res){

    const appid="60ce80c7a038fc9555d2597a46fd1834";
    const city=req.body.cityname;
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+appid+"&units="+unit;
    https.get(url,function(response){
        console.log(response.statusCode); 

        response.on("data",function(data){
            console.log(data);
            const weatherData=JSON.parse(data);
            console.log(weatherData);
            const tempc=weatherData.main.temp;
            const weatherdesc=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const iconurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(tempc)
            console.log(weatherdesc)
            
            res.write( "<h1>The weather is currently "+weatherdesc+"</h1>");
            res.write("<h2>The temperature in "+city+" is "+tempc+" degree celsius</h2>")
            res.write("<img src="+iconurl +">");
            res.send();
        })
    });
})

app.listen("4000",function(){
    console.log("Server is running on port 3000")
})