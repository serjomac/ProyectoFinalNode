const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();

router.get('/', function(req, res){
      
      knex('images')
        .select()
        .then( images => {
             res.render('images/index', {ObjImages: images});
             });
});

module.exports = router;