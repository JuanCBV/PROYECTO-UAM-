console.log("Entramos");

var items = document.getElementsByClassName("item");

var cantidad = items.length; // --> 3

console.log(cantidad);

console.log("Cantidad de listas "+ cantidad);

var div = document.createElement("div");

div;

div.innerText = "Aprendiendo JavaScript";

var divUno= document.getElementById("uno");

divUno.appendChild(div);

var lista=document.getElementById("lista");

var hijo = document.createElement("li");
hijo.innerText = "li nuevo";
lista.appendChild(hijo);

var par=document.getElementById("tres").style.color="red";

var par=document.getElementById("lista").style.color="Green";

var parra2=document.getElementById("Parra2").style.backgroundColor="#0099FF";
var par2=document.createElement("p");

var textos = "Hace unos años, existía un pueblo en la profundidad de una gran montaña a las afueras de Italia.En este pueblo existia unos dioses los cuáles todos los dias de halloween salían de aquella montaña para atemorizar y arruinar las decoraciones de halloween, con lluvias, descargas electricas, vientos fuertes y accidentes en exceso";
parra2.appendChild(par2);
