const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    name: {
        type: String
    },
    type: {
        type: String
    }, 
    body: {
        type: String
    }
})

module.exports = mongoose.model("File", fileSchema);