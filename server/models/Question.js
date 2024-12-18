const mongoose = require("mongoose")

const QuestionSchema = new mongoose.Schema({
    name: {type: String, min:2, max: 30, required:true},
    email: {type: String, min:2, max: 30, required:true},
    content: {type: String,min:2, required:true},
})

module.exports = mongoose.model('Question', QuestionSchema);