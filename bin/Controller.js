const mongoose = require("mongoose");
const Estudiantes = require('./models/Estudiantes');
//const Comentarios = require('./models/Estudiantes');
//const Materias = require('./models/Materias');
//const Posts = require('./models/Posts');

class Controller{ 
     constructor(){
         this.connect();
     }

     async connect(){
        try{
            await mongoose.connect(
               "mongodb+srv://ales123:1234567890@cluster0-sqrg7.mongodb.net/sharecode?retryWrites=true&w=majority",
                {useNewUrlParser:true}
         );
         console.log("Conectados a la base de datos")

        } catch(e){
            console.error(e)
        }
     }
     //agregar un ususario//
  setEstudiantes(Estudiante, res) {
    Estudiantes.create(Estudiante, function(err, newEstudiante) {
        if (err) throw err;
        res.send({ status: 200, nE: newEstudiante });
    });
  }
   // traer todos los usuarios//
  getEstudiantes (res) {
    Estudiantes.find({}, (err, Estudiantes) => {
      if (err) throw err;
      res.send({ allEstudiantes: Estudiantes })
    });
  }
  //traer los usuarios por el id//
  getEstudiante(id, res) {
    Estudiantes.find({ _id: id }, (err, Estudiante) => {
      if (err) throw err;
      res.send({ Estudiante: Estudiante });
    });
  }
  //actualizar el usuario por su id//
  updateEstudiante(Estudiante, res) {
    let { id, edad, contraseña } = Estudiante;
    Estudiantes.updateOne(
      { _id: id },
      { $set: {edad: edad, contraseña: contraseña } }
    )
       .then(rawResponse => {
         res.send({ message: "Estudiante updated", raw: rawResponse });
       })
       .catch(err => {
         if (err) throw err;
       });
  }

  setPostToUser(est, post, res){
    Estudiantes.updateOne(
      { _id: est },
      { $push: { "post": post } }
    )
    .then(rawResponse => {
      res.send({ message: "post pushed to estudent", raw: rawResponse });
    })
    .catch(err => {
      if (err) throw err;
    });
  } 

  getPostByStudent(id, res){
    Estudiantes.findOne({ _id: id })
    .populate({
      path: 'post',
      select: "titulo codigo_error codigo_fuente descipcion"
    })
    .exec( (err, post) => {
      if (err) throw err;
      res.send(post);
    })
  }
  
  //Eliminar usuario por su id//
  deleteEstudiante(id, res) {
      Estudiantes.deleteOne({ _id: id }, function(err) {
          if (err) throw err;
          res.send({ message: "Estudiante ha sido eliminado" });
      });
        
  }
  getPosts(Post, res) {
    Posts.create(Post, function(err, newPost) {
        if (err) throw err;
        res.send({ status: 200, nP: newPost });
    });
  }
  
  setPost(Comentario, res) {
    Comentarios.create(Comentario, function(err, newComentario) {
        if (err) throw err;
        res.send({ status: 200, nE: newComentario });
    });
  }

 

    
}
exports.controller = new Controller()