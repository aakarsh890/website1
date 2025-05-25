const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");
const cors = require("cors");


if(process.env.NODE_ENV !== "production"){
    require('dotenv').config({path: "server/config/config.env"});
}

app.use(cors({
  origin: ["http://localhost:3000", "https://frontend-1asg.onrender.com"],
  credentials: true, 
}));


// using Middlewares
app.use(express.json({limit: "50mb"}));
app.use(express.urlencoded({limit:"50mb", extended: true }));
app.use(cookieParser());


//importing routes
const post = require("./routes/post");
const user = require("./routes/user");

// using routes
app.use("/api/v1",post);
app.use("/api/v1",user);

module.exports = app;