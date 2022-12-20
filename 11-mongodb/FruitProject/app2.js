
//Using mongoose

const mongoose=require("mongoose")
//creating and connecting to the database
mongoose.connect("mongodb://localhost:27017/fruitsDB"); 

//to start inserting data, first we need to create a new schema which is a blueprint or structure of the data which is going to be saved in the database

const fruitSchema=new mongoose.Schema({
name:{
    type:String,
    required:[true,"NAME IS REQUIRED."]
},
rating:{
    type:Number,
    min:0,
    max:10
},
review:String
});
// we create a model using the schema. MODEL is bascially a collection

//a singular name should be specified. Mongoose converts the singular to plural

const Fruit=mongoose.model("Fruit",fruitSchema);

//making a fruit document
const apple=new Fruit({
    name:"Apple",
    rating:7,
    review:"Pretty Solid as a fruit"
});


//it saves the fruit document in the Fruits collection in the fruitsDB database
//fruit.save();


const personSchema=new mongoose.Schema({
    name:String,
    age:Number,
    favouritefruit:fruitSchema
    });
const Personc=mongoose.model("Person",personSchema);

//making a fruit document
const persona=new Personc({
    name:"Ted",
    age:31,
    favouritefruit:apple
});
const personb=new Personc({
    name:"Amy",
    age:31
});


//it saves the fruit document in the Fruits collection in the fruitsDB database
persona.save();
personb.save();

const kiwi=new Fruit({
    name:"Kiwi",
    rating:7,
    review:"They are awesome"
});

const orange=new Fruit({
name:"Orange",
rating:5,
review:"They are a bit sour"
});

const banana=new Fruit({
    name:"banana",
    rating:5,
    review:"They are good for health"
    });
    
    const peach=new Fruit({
        name:"peach",
        rating:5,
        review:"They are good for health"
        });
Fruit.insertMany([apple,kiwi,orange,banana,peach],function(err){
if(err){
    console.log("Error")
}
else{
    console.log("There are no errors")
}
})

//Reading from our database ; equivalent to find from the database
Fruit.find(function(err,fruits){
if (err){
    console.log("There are errors");
}
else{
    console.log("There are no errors");
    fruits.forEach(function(fruit){
        console.log(fruit.name);
    });
}
});

Fruit.updateOne({_id:"62f7dfc4ec151733329a1fa5"},{rating:6},function(err){
    if(err){
        console.log("There are errors");
    }
    else{
        console.log("Successfully updated the document"); 
       }
});

Fruit.deleteMany({name:"peach"},function(err){
    if (err){
     console.log("There are errors");   
    }
    else{
    console.log("Successfully deleted");
}
})
Personc.deleteMany({name:"Ted"},function(err){
    if (err){
     console.log("There are errors");   
    }
    else{
    console.log("Successfully deleted");
}
})
