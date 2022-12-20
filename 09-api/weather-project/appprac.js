const express=require("express")

const app=express()
const https=require("https")

app.get("/",function(req,res){

    const appid="60ce80c7a038fc9555d2597a46fd1834";
    const city="London";
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+city+",uk&appid="+appid+"&unit="+unit;
    https.get(url,function(response){
        console.log(response.statusCode); 

     response.on("data",(data)=>{
        const weatherData=JSON.parse(data);
        console.log(weatherData);
        console.log(JSON.stringify(weatherData));
     })
    });

})


app.listen("3000",function(){
    console.log("Server is running on port 3000")
})