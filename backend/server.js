// // server.js

// const express = require("express");
// const bodyParser = require("body-parser");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const articleRoute = require('./route/articleRoute');

// const app = express();

// // Connect to MongoDB
// mongoose.connect(
//   "mongodb+srv://chamaththa:chamaththashamod@cluster1.jlvhrql.mongodb.net/Cake_Fantacy_Shop",
//   { useNewUrlParser: true, useUnifiedTopology: true }
// );
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });

// app.use(bodyParser.json());
// app.use(articleRoute);
// app.use(cors());

// const PORT = process.env.PORT || 8000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require("express")
const mongoose = require("mongoose")
var routers = require('./route/articleRoute');
const bodyParser = require("body-parser")

const app = express()
const cors = require('cors');
const port = 8000;

const mongodatabaseURL ="mongodb+srv://chamaththa:chamaththashamod@cluster1.jlvhrql.mongodb.net/Cake_Fantacy_Shop";

mongoose.connect(mongodatabaseURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const connection = mongoose.connection


app.listen(port,()=>{
    console.log("Server is running port" +port);
})


connection.once("open",()=>{
    console.log("MongoDb Connected!!!......")
});

app.use(cors());
app.use(bodyParser.json());
app.use(routers);