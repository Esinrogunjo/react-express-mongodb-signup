const express = require("express");
const signUpTemplateCopy = require("../models/SignUpModels");
const router = express.Router();

router.post("/signup", (request, response) => {
  console.log("I am here ");
  try {
    const signedUpUser = new signUpTemplateCopy({
      fullName: request.body.fullName,
      username: request.body.username,
      email: request.body.email,
      password: request.body.password,
    });
    signedUpUser.save();
    response.json(data);
  } catch (error) {
    response.json(error);
  }
});

module.exports = router;
