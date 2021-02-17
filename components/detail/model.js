const mongoose = require('mongoose')

const detailSchema = new mongoose.Schema({
    bookId: { type: Schema.types.ObjectId, required: true, ref: 'Book' },
    name: { type: String, required: true },
    unitValue: { type: Number, required: true, min: 0 },
    quantity: { type: Number, required: true, min: 1 }
})

const Detail = mongoose.model('details', detailSchema)

module.exports = Detail