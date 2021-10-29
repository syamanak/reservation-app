const mongoose = require('mongoose')
const Schema = mongoose.Schema
    // const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
    // author: ObjectId,
    coverImage: String,
    name: { type: String, required: true, max: [60, '最大60文字までです'] },
    price: Number,
    description: String,
    heding01: String,
    heding02: String,
    heding03: String,
    heding01text: String,
    heding02text: String,
    heding03text: String
});

module.exports = mongoose.model('Product', ProductSchema)
