require('dotenv').config();
const app = require('./app');
const { connectData } = require('./config/database');
const cloudinary = require("cloudinary");
const cors = require("cors");

app.use(cors({
    origin: "https://frontend-1asg.onrender.com", // Add your frontend URLs
    credentials: true, // Allows cookies
}));
app.options("*", cors());

connectData();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
})
  

app.get("/",(req,res)=>{
  return res.json({
    success: true,
    message: "YOUR SERVER IS UP",
  })
})

app.listen(process.env.PORT,()=>{
    console.log(`server is running on port ${process.env.PORT}`);
})