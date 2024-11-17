const mongoose = require('mongoose');

main()
.then(() => {
    console.log('MongoDB Connected…')
})
.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/amazon'); 
}

//schema Validations -> it is true syntax for schema 
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,  // i.e you cant skip the title for any book
        maxLength: 30,  //max length of title is 30
    }, 
    author: {
        type: String,
    },
    price: {
        type: Number,
        min: [1, "Price is too low for selling"],  // to define custom error if valiaion fails we can do so by passing error as a 2nd value in array
    },
    discount: {
        type: Number,
        default: 0,  //default value for discount
    },
    category : {
        type: String,
        enum: ['fiction', 'non-fiction', 'sci-fi'],  //category should be one of these(if defined other than this error will occur)
    },
    genre: [String], //genre should be an array of strings
});

const Book = mongoose.model('Book', bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "R.D Sharma",
//     price: 1200,  //price: '1200' -> it  is also correct (it will be parsed to number)
//     category: 'non-fiction',
//     genre: ['maths', 'science'],
// })

// book1.save().then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// })

Book.findByIdAndUpdate("672e0420b2572fcd3b0072f2", {price: -500}, {runValidators: true}) // options -> runValidators: true -> it will run the Schema validations(rules) on the updated data also
.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err.errors.price.properties.message);  //too print custom error
})

