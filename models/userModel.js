const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    likedMovies: Array,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", userSchema);
