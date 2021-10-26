const mongoose = require("mongoose");
const schema = mongoose.Schema;

const userShema = new schema({
  name: { type: String, required: true },
  Email: { type: String, required: true },
  Phone: { type: String, required: true },
});

module.exports = User = mongoose.model("user", userShema);
