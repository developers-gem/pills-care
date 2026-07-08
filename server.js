const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

const corsOptions={
  "origin": "http://localhost:5173",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204
}
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));



// mongoose.connect(process.env.MONGO_URI)
mongoose.connect('mongodb://127.0.0.1:27017/pills-care')

  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(5000, () => console.log("Server running on port 5000"));