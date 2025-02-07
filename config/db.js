const mongoose = require('mongoose');


const DB_NAME = 'comp3133_StudentID_assignment1';


const MONGO_URI = ``; //removed before submitting 

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected successfully to ${DB_NAME}!`);
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
