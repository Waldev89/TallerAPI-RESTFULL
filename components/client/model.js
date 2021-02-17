const mongoose = require('mongoose')

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String },
    mobile: { type: String },
    email: { type: String, required: true },
    passwod: { type: String, required: true }
}, {
    timestamps: true
})

const Client = mongoose.model('clients', clientSchema)

module.exports = Client