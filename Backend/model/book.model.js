import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    category: String,
    image: String,
    title: String,
    isPaid: { type: Boolean, default: false }  
});

const bookModel = mongoose.model("Bookstore", bookSchema);

export default bookModel;
