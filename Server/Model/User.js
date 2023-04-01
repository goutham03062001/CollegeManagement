const mongoose = require("mongoose");
const GoogleAuthSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId },
  googleId: { type: String },
  name: { type: String },
  email: {
    type: String,
    match:
      /[a-z0–9!#$%&’*+/=?^_`{|}~-]+(?:\.[a-z0–9!#$%&’*+/=?^_`{|}~-]+)*@(?:[a-z0–9](?:[a-z0–9-]*[a-z0–9])?\.)+[a-z0–9](?:[a-z0–9-]*[a-z0–9])?/,
  },
});

module.exports = GoogleAuth = mongoose.model("googleAuthUsers",GoogleAuthSchema);