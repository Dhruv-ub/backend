const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const listingRoutes = require("./routes/listing");
const cors = require("cors");

const app = express();


app.use(bodyParser.json());


const MONGO_URI = process.env.MONGO_URI; 
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));


app.use(cors());
app.use("/listing", listingRoutes);


const PORT = process.env.PORT || 5000; 
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
