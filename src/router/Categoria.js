const  express = require("express");
const CategoriaSchema = require("../Models/ModelsCateg");

const router = express.Router();

//create Categorias
router.post("/Categoria", (req, res) => {
    const Categoria = CategoriaSchema(req.body);
    Categoria
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get all Categoria
router.get("/Categoria", (req, res) => {
    CategoriaSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a Categoria
router.get("/Categoria/:id", (req, res) => {
    const { id } = req.params;
    CategoriaSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// update a produto
router.put("/Categoria/:id", (req, res) => {
    const { id } = req.params;
    const { Calificação, Marca, Stock } = req.body;
    CategoriaSchema
    .updateOne({ _id: id }, { $set: {Calificação, Marca, Stock}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// delete a produt
router.delete("/Categoria/:id", (req, res) => {
    const { id } = req.params;
    CategoriaSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;