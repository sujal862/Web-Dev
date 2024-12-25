const mongoose  = require('mongoose');

main()
.then(()=>{
    console.log("MongoDB connected");
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/authtestapp');
}

const userSchema = new mongoose.Schema({
    username: {
        type:String,
    },
    email: {
        type:String,
    },
    password: {
        type:String,
    },
    age: {
        type:Number,
    }
})

const User = mongoose.model('User', userSchema);

module.exports = User;