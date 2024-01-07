// server.js

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const articleRoute = require('./route/articleRoute');

const app = express();

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://chamaththa:chamaththashamod@cluster1.jlvhrql.mongodb.net/Cake_Fantacy_Shop",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

app.use(bodyParser.json());
app.use(articleRoute);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
