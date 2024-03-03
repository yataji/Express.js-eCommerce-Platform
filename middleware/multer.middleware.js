const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/images");
  },
  filename: function (req, file, cb) {
    console.log(req);
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
// console.log("multer");

exports.upload = multer({
  storage: storage,
}).array("images");
