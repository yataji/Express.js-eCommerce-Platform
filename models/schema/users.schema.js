const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    images: {
      type: String,
      required: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
      trim: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    age: {
      type: Number,
      min: 18,
      required: false,
    },
    country: {
      type: String,
      required: false,
    },
    sex: {
      type: String,
      required: false,
      enum: ["male", "female"],
    },
    phoneNumber: {
      type: String,
      required: false,
      match: [/^\+?[1-9]\d{1,14}$/, "Please fill a valid phone number"],
    },
    lastLogin: {
      type: Date,
      default: Date.now,
      required: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
