const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const routeUrls = require("./routes/route");
const cors = require("cors");

mongoose.connect(process.env.DATABASE_ACCESS, () =>
  console.log("Database connected")
);
app.use(express.json());
app.use(cors);
app.use("/app", routeUrls);
app.get("/", (request, response) => console.log("I am here"));
app.listen(4000, () => console.log("servver is running on port 4000"));
