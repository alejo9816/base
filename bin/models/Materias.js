const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MateriasSchemas = new Schema({
    nombre: String,
    descripcion: String,
    
});

var Materias = mongoose.model("Materias", MateriasSchema);
module.exports = Materias;