const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Bank = new Schema(
  {
    title: { type: String },
    description: { Type: String },
    image: { Type: String }
  },
  { collection: "firstCollection" }
);
module.exports = mongoose.model("Bank", Bank);
