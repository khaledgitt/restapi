const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/restapi");
    console.log("database is connected..");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
