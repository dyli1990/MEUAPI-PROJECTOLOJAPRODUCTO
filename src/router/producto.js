const  express = require("express");
const productoSchema = require("../models/Modelsproducto");

const router = express.Router();

//create producto
router.post("/productos", (req, res) => {
    const producto = productoSchema(req.body);
    producto
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error}));
});

// get all produtos
router.get("/productos", (req, res) => {
    productoSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// get a produto
router.get("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// update a produto
router.put("/productos/:id", (req, res) => {
    const { id } = req.params;
    const { name, preço, cantidade } = req.body;
    productoSchema
    .updateOne({ _id: id }, { $set: {name, preço, cantidade}})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

// delete a produt
router.delete("/productos/:id", (req, res) => {
    const { id } = req.params;
    productoSchema
    .remove({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
    });

module.exports = router;
