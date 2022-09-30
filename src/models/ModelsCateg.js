const mongoose = require("mongoose");

const CategoriaSchema = mongoose.Schema({
    Clasificação: {
        type: String,
        required: true
    },
    Marca: {
        type: String,
        required: true
    },
    Stock: {
        type: Number,
        requerid: true
    }
});

module.exports = mongoose.model('Categoria', CategoriaSchema);