const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  email: { type: String, require: true },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    require: true,
    ref: "Address",
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;