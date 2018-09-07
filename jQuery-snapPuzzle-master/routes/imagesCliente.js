const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();





router.get('/index', function(req, res){
             
             knex('images')
                .select()
                .then(images => {
                 
                 res.render('index',{ObjImages: images});
                 
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