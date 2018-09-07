const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();

router.get('/', function(req, res){
      
      knex('rols')
        .select()
        .then( rols => {
             res.render('rols/index', {ObjRols: rols});
             });
});

module.exports = router;