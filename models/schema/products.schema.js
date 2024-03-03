const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true, // Indicates that every product must have a title
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: false,
      },
    ],
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    published: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
