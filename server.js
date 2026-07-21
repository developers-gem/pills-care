const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const Medication = require("./models/Medications")
const RemainderSchedule = require("./models/RemainderSchedule")
const medications = require("./routes/medications")
const remainder = require("./routes/remainderSchedule")

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

// User  Routesremainder
app.use("/api/auth", require("./routes/auth"));

// medication  Routes 
app.use("/api/medications", medications);

// remainder Routes 
app.use("/api/reminder", remainder);



// mongoose.connect(process.env.MONGO_URI)
mongoose.connect('mongodb://127.0.0.1:27017/pills-care')
  // mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("API is running");
});


app.listen(5000, () => console.log("Server running on port 5000"));