const mongoose = require("mongoose")

const ServiceSchema = new mongoose.Schema({
    question: {
        name: { type: String, required: true },
        email: { type: String, required: true },
        content: { type: String, required: true },
    },
    items: {type: [String], required:true},
    totalTime: { type: String, required: true },
    totalPrice: { type: Number, required: true },
})

module.exports = mongoose.model('Service', ServiceSchema);