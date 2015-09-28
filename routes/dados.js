var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var td = require('../mods/dados_mod');

/* GET home page. */
router.post('/', function(req, res, next) {
  var token = req.body.token;
  var user_name = req.body.user_name;
  var text = req.body.text;
  var tokenAceptar = 'nvvAnbtWATZtigF95kMhgowC';
  var resultado = '';

  if(token === tokenAceptar){
    // quito el !tiro_ para enviar
    textoFormateado = text.replace('!tiro ','');
    var resultadoDado = td.fnTirarDados(textoFormateado);
    var resultado = user_name+resultadoDado;
    res.send({"text":resultado});
  }
});

router.get('/', function(req, res, next) {
  res.render("dados", { mensaje: "Lanzador de dados PR RPG Slack" });
});

module.exports = router;
