const express = require('express');

const PORT = process.env.PORT || 5000
const path = require('path');
var exphbs = require('express-handlebars');


var routes = require('./routes/imagesCliente.js')
var demo = require('./routes/index.js')
var users = require('./routes/users.js')
var images = require('./routes/imagesAdmin.js')
var rols = require('./routes/rols.js')
var audios = require('./routes/audios.js')


var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extends : true}));
app.post('/process', function(req, res){
  
  console.log("formulario: " + req.query.form);
  console.log("nombre: " + req.body.inputName);
  console.log("email: " + req.body.inputEmail);
});



app.use('/', routes)
app.use('/usuarios', users)

app.use('/imagenes', images)
app.use('/demo', demo)
app.use('/roles', rols)
app.use('/audios', audios)




app.use(express.static(path.join(__dirname, '/public')));



app.listen(PORT, () => console.log(`express on location ${PORT}`));

