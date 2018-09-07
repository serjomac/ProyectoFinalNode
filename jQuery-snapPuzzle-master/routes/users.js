const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();



function validTodo(users){
     return typeof users.usuario=='string';
}

router.delete('/:id',(req,res)=>{
    const id=req.params.id
    if(typeof id !='undefined'){
       knex('users')
      
       .where('id', id)
       .del()
       .then(()=>{
           res.redirect('/usuarios')
           console.log('users', users);
           res.render('usuarios',users);
           
       })
   } 
    
});

router.post('/', (req,res)=>{
    console.log(req.body);
    if(validTodo(req.body)){
        const todo={
            id_rols: req.body.id_rols,
            nombre: req.body.nombre,
            usuario: req.body.usuario,
            clave: req.body.clave,
            puntaje: req.body.puntaje,
            urlImagen: req.body.urlImagen,
            
        
    };

        knex("users")
        .insert(todo,'*')
        .then(ids=>{
           const usuario=ids[0];
            res.redirect('/usuarios/');
        });
    
    }

          });


router.get('/', function(req, res){
      
      knex('users')
        .select()
        .then( users => {
             res.render('user/index', {ObjUsers: users});
             });
});

module.exports = router;