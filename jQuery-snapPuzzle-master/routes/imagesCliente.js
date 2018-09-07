const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();





router.get('/seleccionRompecabeza', function(req, res){
             
             knex('images')
                .select()
                .then(images => {
                 
                 res.render('seleccionRompecabeza',{ObjImages: images});
                 
             });
             
});





router.get('/', function(req, res){
             
             knex('users')
                .where("id_rols", 1)
                .then( users => {
                 res.render('loginJugador', {ObjUsers: users});
             });
             
});

module.exports = router;