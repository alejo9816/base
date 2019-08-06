const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostsSchema = new Schema({
    titulo: String,
    codigo_error: String,
    codigo_fuente: String,
    descripcion: String,
    id_estudiante: 
        {
            type: Schema.Types.ObjectId,
            ref: "Estudiantes"
        }
    ,
    id_materia: 
        {
            type: Schema.Types.ObjectId,
            ref: "Materias"
        }
    
});

var Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;