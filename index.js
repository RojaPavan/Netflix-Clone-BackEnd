const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json({}));
app.use(cors());
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = 5000;

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Netflix Clone Application</h1>");
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DataBase is connected");
  })
  .catch((err) => console.log(`Something went wrong. ErrorMsg: ${err}`));

app.use("/api/user", userRoutes);
app.listen(PORT, console.log(`Server is running in: http://localhost:${PORT}`));
