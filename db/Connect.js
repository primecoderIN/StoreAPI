const mongoose = require("mongoose");

const ConnectToDB = (URI) => {
  return mongoose
    .connect(URI)
    .then(console.log("Connected"))
    .catch((err) => console.log(err));
};

module.exports = ConnectToDB;