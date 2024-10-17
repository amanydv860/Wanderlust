
require("dotenv").config()
const express = require("express");
const cors = require("cors")
const mongoose = require("mongoose")
const path = require('path');


const app = express()
const methodOverride = require("method-override");
const listingRoutes = require("./routes/listingRoutes")
const userRoutes = require("./routes/userRoutes");
const reviewRoutes = require('./routes/reviewRoutes');
const  bookingsRoute = require("./routes/bookingRoutes");


const PORT = process.env.PORT || 3000
const url = process.env.MONGO_URL;




// Middleware
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true })); // For form data
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));


// Allow specific origin
app.use(cors({
    origin: 'https://wander-lust-eesjjtf2g-aman-yadavs-projects-34dacdaa.vercel.app', // Replace with your frontend URL
    methods: 'GET,POST,PUT,DELETE', // Specify the methods you want to allow
  }));
  






// Routes
app.use("/api/listings", listingRoutes);
app.use("/api/users", userRoutes);
app.use('/api', reviewRoutes);
app.use('/api/bookings', bookingsRoute);








app.listen(PORT,()=>{
    console.log("server start")
    mongoose.connect(url);
    console.log("DB Connect")
    })
