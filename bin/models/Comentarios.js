const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ComentariosSchema = new Schema({
    titulo: String,
    descripcion: String,
    id_estudiante: 
        {
            type: Schema.Types.ObjectId,
            ref: "Estudiantes"
        }
    ,
    id_post: 
        {
            type: Schema.Types.ObjectId,
            ref: "Posts"
        }
    
});

var Comentarios = mongoose.model("Comentarios", ComentariosSchema);
module.exports = Comentarios;