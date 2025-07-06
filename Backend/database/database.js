const mongoose=require("mongoose");
const dotenv=require("dotenv");
const path=require("path");
dotenv.config({path:path.join(__dirname,"../config/.env")});
const connectDB = async () => {
  try {
    console.log(process.env.MONGODB,"heyy")
    const conn = await mongoose.connect(process.env.MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports=connectDB;
