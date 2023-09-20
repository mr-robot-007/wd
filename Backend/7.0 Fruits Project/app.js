import mongoose from "mongoose";

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB",{useNewUrlParser : true});;

const fruitsSchema = new mongoose.Schema({
  name : {
    type: String,
    required :[ true,"Enter Name Please !"]
  },
  rating : {
    type: Number, 
    min : 1,
    max : 10
  },
  review : String
});
const Fruit = mongoose.model("Fruit",fruitsSchema);
const pineapple = new Fruit ({
  name : "Pineapple",
  score : 9,
  review : "Great"
})

// await pineapple.save();



const personSchema = new mongoose.Schema({
  name : String,
  age : Number,
  favouriteFruit : fruitsSchema
})


const Person = mongoose.model("Person",personSchema);
const fruits = await Fruit.find();


// await Person.updateOne({name : "Ram"},{favouriteFruit: pineapple});
await Person.updateOne({name : "Ram"},{favouriteFruit: fruits[0]});




// const person = new Person({
//   name : "Amy",
//   age : 12,
//   favouriteFruit: pineapple
// });
// person.save();

// const fruit  = new Fruit  ({
//   name : "Guava",
//   rating : 9,
//   review : "Pretty solid as a fruit"
// });

// fruit.save();



// const res = await Fruit.updateOne({name: "Aple"},{name : "Apple"});

// console.log(res.acknowledged);
// await Fruit.deleteMany({name:"Apple"});


// const fruits = await Fruit.find({})
// fruits.forEach(fruit => {
//   console.log(fruit);
// });


mongoose.connection.close();

