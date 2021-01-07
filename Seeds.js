// For seeding my application database. 





// getting the mongoose models
const Product = require ('./models/product'); 
const mongoose = require('mongoose');

// connecting to the mongo database
mongoose.connect('mongodb://localhost:27017/farmStand', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("Mongo connect ")
    })
    .catch(err => {
        console.log("have an error")
        console.log(err)
    })

    // Creating a new product for seeding named ruby grapefruit
// const p = new Product ({
//     name: 'Ruby Grapefruit',
//     price: 1.99, 
//     category: 'fruit'
   
   
// })

// inserting many products at once
const seedProducts  = [
    {
        name: 'Ruby Grapefruit',
        price: 1.99, 
        category: 'fruit'
       
       
    },
    {
        name: "Fairy godmother apple",
        price: 8.99,
        category: "fruit"
    },
    {
        name: "auntie key lime cabbage",
        price: 999.99,
        category: "vegetable"
    },
    {
        name: "nina's watermelon",
        price: 10.99,
        category: "vegetable"
    
    },
    {
        name: "katya's goat milk ", 
        price: 11.99,
        category: "dairy"
    }
]

// Saving the product to the database, printing the response
// if it has been saved correctly
// and printing the error if the product has been incorrectly saved. 
Product.insertMany(seedProducts).then (res => {
    console.log(res);
})
.catch( e => {
    console.log(e);
})

// Saving the product to the database, printing the product if it has been saved correctly
// and printing the error if the product has been incorrectly saved. 

// p.save().then(p => {
//     console.log(p)
// })

// .catch(e => {
//     console.log(e)
// })

  