require('dotenv').config();

const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

//=====================MY-ROUTES======================

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const contactRoutes = require('./routes/contact');
const registerRoutes = require('./routes/register');
const homeRoutes = require('./routes/home');
const galleryRoutes = require('./routes/gallery');



//================DATABASE-CONNECTION=================

mongoose.connect(process.env.DATABASE, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB CONNECTED SUCESSFULLY")
})

//==============MIDDLE WARE======================

app.use(bodyParser.json({limit: '50mb'}));
app.use(cookieParser());
app.use(cors());


//=====================ROUTES=========================

app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", contactRoutes);
app.use("/api", registerRoutes);
app.use("/api", homeRoutes);
app.use("/api", galleryRoutes);




app.use("/api/upload", express.static('upload'));



//====================PORT==============================

const port = process.env.PORT || 8000

//===================PORT-RUNNING=======================

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
})