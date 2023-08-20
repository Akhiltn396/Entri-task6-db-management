const mongoose = require("mongoose")
const dotenv = require("dotenv").config()

//storing in mongodb atlas
module.exports.Dbconnect=async ()=>{
   try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('db connceted');
   } catch (error) {
    console.log('db failed',error);
   }
}

//storing in database

// const mongoose = require('mongoose');

// mongoose.set('strictQuery', false);

// const dbConnect = async ()=>{
//     try {
//        await mongoose.connect(process.env.MONGO_URL,
//        {
//          useNewUrlParser: true,

//          useUnifiedTopology: true
//        }

//      );
//      console.log("DB connected Succesfully");
//     } catch (error) {
//         console.log("DB Failed",error.message);
//     }
// }
// module.exports = dbConnect();

