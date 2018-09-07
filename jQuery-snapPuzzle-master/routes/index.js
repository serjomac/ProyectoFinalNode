var express = require('express')
var router = express.Router();
var fortune = require("../lib/fortune");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}



router.get('/add', (req, res) => res.render('user/add'));

router.get('/login', (req, res) => res.render('login'));

router.get('/', function(req, res){
            var x = req.body.img;
            console.log(localStorage.getItem('imagen'))
             knex('images')
                .where("url",x)
                .then( images => {
                 res.render('demo', {ObjImages: images});
             });
             
});

//usar modulos de la libreria fortune.js
router.get("/about", (req, res)=>
       res.render('about', {fortune: fortune.getFortune()})
       );

module.exports = router;


//Handlebars.registerHelper('if', function(v1, options) {
//  if(v1 === 1) {
//    return options.fn(this);
//  }
//  return options.inverse(this);
//});

const knex = require('../db/knex.js');




