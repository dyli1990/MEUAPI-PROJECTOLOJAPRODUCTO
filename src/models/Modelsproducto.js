const mongoose = require("mongoose");

const productoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    preço: {
        type: Number,
        required: true
    },
    cantidade: {
        type: Number,
        requerid: true
    }
});

module.exports = mongoose.model('producto', productoSchema);