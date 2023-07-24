const express = require("express");
const cors = require("cors");
const userRoutes = require("./routes/UserRoutes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = 5000;
app.use(express.json({}));
app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to Netflix Clone Application</h1>");
});

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(
      PORT,
      console.log(`Server is running in: http://localhost:${PORT}`)
    )
  )
  .catch((err) => console.log(`Something went wrong. ErrorMsg: ${err}`));

app.use("/api/user", userRoutes);
