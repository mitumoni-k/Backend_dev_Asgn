const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  address: { type: String, required: true },
  password: { type: String, required: true },
  bio: { type: String, default: "" },  // Optional with default empty string
  profilePicture: { type: String, default: "" } // Optional with default empty string
});

module.exports = mongoose.model('users', userSchema);