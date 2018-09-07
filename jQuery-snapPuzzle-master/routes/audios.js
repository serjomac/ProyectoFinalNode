const express = require('express');
const knex = require('../db/knex.js');
var router = express.Router();

router.get('/', function(req, res){
      
      knex('audios')
        .select()
        .then( audios => {
             res.render('audios/index', {ObjAudios: audios});
             });
});

module.exports = router;