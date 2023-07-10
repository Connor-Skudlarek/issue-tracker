const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genericItemSchema = new Schema({
  category: String,
  title: String,
  description: String,
  price: Number,
  image: String,
  altText: String,
});

const GenericItem = mongoose.model("GenericItem", genericItemSchema);

module.exports = GenericItem;
