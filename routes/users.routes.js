const express = require("express");
const {
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/users.controllers");
const Routes = express.Router();

Routes.get("/:id", getUser);
Routes.put("/:id", updateUser);
Routes.delete("/:id", deleteUser);

module.exports = Routes;
