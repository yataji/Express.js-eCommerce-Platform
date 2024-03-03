const express = require("express");
const { registerUser, loginUser } = require("../controllers/auth.controllers");
const { upload } = require("../middleware/multer.middleware");
const Routes = express.Router();

Routes.post("/register", upload, registerUser);
Routes.post("/login", loginUser);

module.exports = Routes;
