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

        response.on("data",function(data){
            console.log(data);
            const weatherData=JSON.parse(data);
            console.log(weatherData);
            const temp=weatherData.main.temp;
            const weatherdesc=weatherData.weather[0].description;
            const icon=weatherData.weather[0].icon;
            const iconurl="http://openweathermap.org/img/wn/"+icon+"@2x.png";
            console.log(temp)
            console.log(weatherdesc)
            const object={
                name:"Prakhar",
                email:"abc@gmail.com",
                ph: 900
            }
            console.log(JSON.stringify(object))
            res.write("<h1>The temperature in London is "+temp+" degree celsius</h1>")
            res.write( "<h2>The weather is currently "+weatherdesc+"</h2>");
            res.write("<img src="+iconurl +">");
            res.send();
        })
    });

})


app.listen("3000",function(){
    console.log("Server is running on port 3000")
})