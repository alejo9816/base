const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const EstudiantesSchema = new Schema({
    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    edad: String,
    usuario: String,
    contraseña: String,
    post: [
        {
            type: Schema.Types.ObjectId,
            ref: "posts"
        }
    ]
    
});

var Estudiantes = mongoose.model("Estudiante", EstudiantesSchema);
module.exports = Estudiantes;