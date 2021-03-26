function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6ZlGOtMDIer":
        Script1();
        break;
      case "6mgiFboPZmG":
        Script2();
        break;
      case "5Y6M0UjHh9z":
        Script3();
        break;
      case "6TjLXk3ehC5":
        Script4();
        break;
      case "5c127WsCuKG":
        Script5();
        break;
      case "6CvQFmZYSq0":
        Script6();
        break;
  }
}

function Script1()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script2()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx_SYb5VUiurfJoi858TA7GQRp3Qj-sRyfCTdyEQdGYa7iFGJ9y/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
 "MATRICULA" : player.GetVar("Matricula"),
 "NOMBRE" : player.GetVar("Nombre"),
 "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres"),
  "DIAPOSITIVAS VISUALISADAS" : player.GetVar("VIS"),
  "TOTAL DE DIAPOSITIVAS" : player.GetVar("TOT"),
  "CANTIDAD DE INTENTOS" : player.GetVar("intentos"),
  "INTENTOS <70" : player.GetVar("noaprobado"),
  "INTENTOS > 69.99" : player.GetVar("aprobado"),
  "SE IDENTIFICA CON" : player.GetVar("Sombrero")
}
}

function Script3()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

function Script4()
{
  var head = document.getElementsByTagName('head')[0];
var script = document.createElement('script');
script.src = '//code.jquery.com/jquery-1.11.0.min.js';
script.type = 'text/javascript';
head.appendChild(script)
}

function Script5()
{
  var player = GetPlayer();
 
//PLACE YOUR WEB APP URL
WEB_APP_URL = "https://script.google.com/macros/s/AKfycbx_SYb5VUiurfJoi858TA7GQRp3Qj-sRyfCTdyEQdGYa7iFGJ9y/exec";
 
// STORE ARTICULATE STORYLINE VARIABLES
// "Columnname_Google_Spreadsheet" : player.GetVar("Name_Storyline_Variable")
// ATTENTION: Use a comma if you use multiple Storyline variables
storyline =
{
 "FECHA" : new Date().toJSON().slice(0,10), //STORE DATE
 "MATRICULA" : player.GetVar("Matricula"),
 "NOMBRE" : player.GetVar("Nombre"),
 "NIVEL ACADEMICO" : player.GetVar("NivelEstudios"),
  "INSTITUCION" : player.GetVar("Institucion"),
  "SEMESTRE" : player.GetVar("Semestres"),
  "DIAPOSITIVAS VISUALISADAS" : player.GetVar("VIS"),
  "TOTAL DE DIAPOSITIVAS" : player.GetVar("TOT"),
  "CANTIDAD DE INTENTOS" : player.GetVar("intentos"),
  "INTENTOS <70" : player.GetVar("noaprobado"),
  "INTENTOS > 69.99" : player.GetVar("aprobado"),
  "SE IDENTIFICA CON" : player.GetVar("Sombrero")
}
}

function Script6()
{
  //DELAY SO JQUERY LIBRARY IS LOADED
setTimeout(function (){
 
//Export to Google
$.ajax({
url: WEB_APP_URL,
type: "POST",
data : storyline,
success: function(data)
{
console.log(data);
},
error: function(err) {
console.log('Error:', err);
}
});
return false;
}, 1000);
}

