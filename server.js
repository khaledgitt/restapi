//importing express
const express = require("express");

//initialisation
const app = express();

//importing database
const connectDB = require("./config/connectDB");
const { use } = require("./routes/userRouter");

//importing dotenv
require("dotenv").config();

//runnig database
connectDB();

//convert json:middleware
app.use(express.json());

//ROUTE
app.use("/contact", require("./routes/userRouter"));

//listening
app.listen(process.env.PORT, (err) => {
  err ? console.log(err) : console.log("server mriguel...");
});
