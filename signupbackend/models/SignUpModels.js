const mongoose = require("mongoose");

const signUpTemplate = new mongoose.Schema({
  fullNmae: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.export = mongoose.model("mytable, SignUpTemplate");
