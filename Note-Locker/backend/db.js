const mongoose=require('mongoose');
// const mongoURI="mongodb://localhost:27017";
const mongoURI = "mongodb://localhost:27017/test";

// const connectToMongo=async()=>{
//     mongoose.connect(mongoURI,()=>{
//         console.log("Connected to MongoDB successfully");
//     })
// }
const connectToMongo = async () => {
    await mongoose.connect(mongoURI); 
    console.log("Connected to MongoDB successfully");
};

module.exports=connectToMongo;
// const mongoose = require('mongoose');
// const mongoURI = "mongodb://localhost:27017";

// const connectToMongo = async () => {
//   try {
//     await mongoose.connect(mongoURI, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     console.log("Connected to MongoDB successfully");
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err);
//   }
// };

// module.exports = connectToMongo;

