const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
const { controller }= require("./Controller");

app.get("/", (req, res) =>{
   res.send("Hola Mundo mio");
})
 
app.get("/Estudiantes", (req, res) => {
   controller.getEstudiantes(res);
 });

 //agregar un usuario//
 app.post("/Estudiante", function(req, res) {
   let Estudiante  = req.body;
   controller.setEstudiantes(Estudiante, res);
 });

 //traer todos los usuarios//
 app.get("/Estudiante", (req, res) => {
    let datos = req.body;
    controller.getEstudiantes(res, datos);
 });
 
 //traer el usuario por el id//
 app.get("/Estudiante/:id", function(req, res){
    let { id } = req.params;
    controller.getEstudiante(id, res);
 });

 //relacion estudiante con post
 app.post("/Estudiante/:id/:post", function(req, res){
    controller.setPostToUser(req.params.id, req.params.post, res);
 });

 app.get("/Estudiante/:id/post", function(req, res){
    controller.getPostByStudent(req.params.id, res)
 })

 //actualizar el usuario por su id//
 app.put("/Estudiante/:id", function(req, res) {
    let Estudiante = req.body.Estudiante;
    Estudiante.id = req.params.id;
    controller.updateEstudiante(Estudiante, res);
 });
 

 //Eliminar un usario por su id//
 app.delete("/Estudiante/:id", function (req, res) {
    let { id } = req.params;
    controller.deleteEstudiante(id, res);
 });

 app.get("/Post", (req, res) => {
   controller.getPosts(res);
 });
 
 app.post("/Posts/:idE", (req, res) => {
    let idE = req.params.idE
    let post = req.body.post
    post.id_estudiante = idE
   controller.createPost(res, post);
 });

 
 app.get("/Estudiantes", (req, res) => {
   controller.getEstudiantes(res);
 });
 //agregar un comentario
 app.post("/Comentario", function(req, res) {
   let Comentario  = req.body;
   controller.setComentario(Comentario, res);
 });


exports.app = app;
