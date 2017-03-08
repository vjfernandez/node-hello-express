
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/cliente', function (req,res) {
	var r = 'Request recibido por GET<br>';
	r += 'Parámetro get id = '+req.query.id;
	res.send(r);
});

app.get('/factura/:num', function (req,res) {
	var r = 'Request recibido por GET con parámetro URL<br>';
	r += 'Parámetro url numero de factura = '+req.params.num;
	res.send(r);
});

app.get('/nombre', function (req,res) {
	var r= '<form action="nombre" method="POST">';
	r += 'Tu nombre: <input type="text" name="tunombre"><br>';
	r += '<input type="submit">';
	r += '</form>';
	res.send(r);
});

app.post('/nombre', function (req, res) {
	var r = 'Request recibido por POST con parámetro dentro del cuerpo.<br>';
	r += 'Hola '+req.body.tunombre;
	res.send(r);
});

app.listen(8082, function () {
  console.log('Example app listening on port 8081!');
});

