const mongoose = require('mongoose')

const saleSchema = new mongoose.Schema({
    date: { type: Date, required: true },
    total: { type: Number, required: true, min: 0 },
    clientId: { type: Schema.types.ObjectId, required: true, ref: 'Client' }
}, {
    timestamps: true
})

const Sale = mongoose.model('sales', saleSchema)

module.exports = Sale