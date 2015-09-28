var exports = module.exports = {};

exports.fnTirarDados = function(cadena){
  var veces = 0;
  var resultado = '';
  var primerPaso = cadena.toUpperCase().split(';')
  var parser = '';
  if(primerPaso.length===1)
  {
    veces=1;
    parser = primerPaso[0];
  }
  else
  {
    veces = primerPaso[0];
    parser = primerPaso[1];
  }
  console.log(veces,parser);
  for(var i=0;i<veces;i++)
  {
    var valor = 0;
    var toExplode = parser.replace('-','+');
    var tokens = toExplode.split('+');

    for(var j=0;j<tokens.length;j++)
    {

      if(typeof(tokens[j])=='number')
      {
        valor = tokens[j];
      }
      else
      {
        partes = tokens[j].split('D');
        if(partes.length!==2){
          valor='Error de Sintaxis';
        }/*
        else if(typeof(partes[0])!=='number'){
          valor='Error de Sintaxis parte 1';
        }
        else if(typeof(partes[1])!=='number'){
          valor='Error de Sintaxis parte 2';
        }*/
        for(var k=0;k<partes[0];k++)
        {
          valor+=Math.floor(Math.random()*(partes[1]-1)+1); //rand(1,$partes[1]);
        }
      }
    }
    if(resultado.length!==0)
    {
      resultado += ', ';
    }
    resultado += valor;
  }

  resultado = 'Tirada de: '+cadena+'.  Resultado: '+resultado;
  return resultado;
}
