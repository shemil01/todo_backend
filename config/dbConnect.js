const mongoose = require('mongoose')

const connectDb = async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/todo')
        .then(()=>{
            console.log("data base connected")
        })
    }
    catch (error){
console.log(error)
    }
}

module.exports = connectDb