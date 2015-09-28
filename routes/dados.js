var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var td = require('../mods/dados_mod');

/* GET home page. */
router.post('/', function(req, res, next) {

    var menrecibido = req.body.text;
    var menformateado = menrecibido.replace('roll ','');

    var resultado = td.fnTirarDados(menformateado);
    res.send({"text":resultado});
});

router.get('/', function(req, res, next) {
  res.render("dados", { mensaje: "Lanzador de dados PR RPG Slack" });
});

module.exports = router;
