const User = require("../models/schema/users.schema");
exports.registerUser = (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser);
  res.status(201).json(newUser);
};
exports.loginUser = (req, res) => {};
