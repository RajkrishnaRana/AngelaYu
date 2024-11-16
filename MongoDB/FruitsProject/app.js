const mongoose = require ("mongoose")

mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB", {useNewUrlParser : true})

const fruitSchema = new mongoose.Schema({
    name : {
        type : String,
        required : [true, "Please check you data entry, no name specified"]
    },
    rating : {
        type : Number,
        min : 1,
        max : 10
    } ,
    review : String
})

const Fruit = mongoose.model("Fruit", fruitSchema)

const fruit = new Fruit ({
    name : "Apple",
    rating : 32,
    review : "Pretty solid as a fruit"
})

//fruit.save()

const personSchema = new mongoose.Schema({
    name : String, 
    age : Number,
    favouriteFruit : fruitSchema
});

const Person = mongoose.model("Person", personSchema);

const person = new Person ({
    name : "Raj",
    age : 23
});

//person.save();

const kiwi = new Fruit({
    name : "kiwi",
    score : 10,
    review : "Kind of mehh"
});

const orange = new Fruit ({
    name : "orange",
    score : 8,
    review : "Okeish"
});

const banana = new Fruit ({
    name : "banana", 
    score : 9,
    review : "I likes the taste"
});

//Fruit.insertMany([kiwi, orange, banana])

Fruit.find().then((fruits) => {
    //mongoose.connection.close()
    fruits.forEach(f => {
            console.log(f.name)
       });
}) 

Fruit.updateMany({name : "Apple"}, {review : "how to solve"}).then((err) => {
    console.log("successfully updated") 
})

Person.updateOne({name : "Raj"}, {favouriteFruit : orange}).then(() => {
    console.log("Successfully added the fav fruit")
})

// Fruit.deleteOne({name : "Apple"}).then(() => {
//     console.log("successfully deleted")
// })




    
