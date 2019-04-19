const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  id: { type: String, required: true, unique: true},
  title: { type: String, required: true, unique: true },
  authors: { type: String, required: false },
  description: { type: String, required: false },
  image: { type: String, required: false },
  saleLink: { type: String, required: false },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
