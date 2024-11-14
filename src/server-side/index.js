const express = require('express');
require('dotenv').config(); 
const mongoose = require('mongoose');
const cors = require('cors'); 
const cookieParser = require("cookie-parser");
const { UserRouter } = require("./routes.js/user.js"); 

const app = express();
app.use(cors({
  origin: ['http://localhost:3000'],
  credentials: true
}));


app.use(cookieParser());
app.use(express.json());
app.use("/auth", UserRouter);

mongoose.connect("mongodb://localhost:27017/PlaceX", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
