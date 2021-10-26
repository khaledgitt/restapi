const express = require("express");
const userRouter = express.Router();
const User = require("../models/user");

//create user and save it
//methode: post
//req.body

userRouter.post("/", async (req, res) => {
  try {
    const newUser = new User(req.body);
    let result = await newUser.save();
    res.send({ result: result, msg: "contact is added.." });
  } catch (error) {
    res.status(400).send({ msg: "can not add user" });
    console.log(error);
  }
});

// get all users
//methode: get
userRouter.get("/", async (req, res) => {
  try {
    let result = await User.find();
    res.send({ users: result, msg: "All users" });
  } catch (error) {
    res.status(400).send({ msg: "can not get all users" });
    console.log(error);
  }
});

//get one user
//methode: get
//params
userRouter.get("/:id", async (req, res) => {
  try {
    let result = await User.findOne({ _id: req.params.id });
    res.send({ users: result, msg: "user:" });
  } catch (error) {
    res.status(400).send({ msg: "can not find this user" });
    console.log(error);
  }
});
//update user
//methode: put
//params
//req.body
userRouter.put("/:id", async (req, res) => {
  try {
    let result = await User.findOneAndUpdate(
      {
        _id: req.params.id,
      },

      { $set: { ...req.body } }
    );
    res.send({ userUpdated: result, msg: "user updated" });
  } catch (error) {
    res.status(400).send({ msg: "can not modify the user" });
    console.log(error);
  }
});
//delete user
//methode:delete
//params

userRouter.delete("/:id", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
    res.send({ msg: "user deleted" });
  } catch (error) {
    res.status(400).send({ msg: "can not delete the user" });
    console.log(error);
  }
});

module.exports = userRouter;
