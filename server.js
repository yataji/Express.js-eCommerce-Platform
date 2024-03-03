const express = require("express");
const { server, cfMongoose } = require("./config/all.config");
const app = express();
const authRoutes = require("./routes/auth.routes");
const usersRoutes = require("./routes/users.routes");
const productsRoutes = require("./routes/products.routes");
const { mongoose } = require("./config/mongoos.config");
// const { mongoose } = require("mongoose");
// const { mongoose } = require("mongoose");

// app.use(cookieParser());

// app.use(express.static("public/images"));
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }));

mongoose;

app.use("/api/auth", authRoutes);
app.use("/api/profile", usersRoutes);
app.use("/api/products", productsRoutes);

app.listen(server.port, (req, res) => {
  console.log(`App runing on port ${server.port}`);
});
