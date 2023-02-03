let puntos = 25;
let nombre = prompt("Indica cual es tu nombre.");
function Correcto() {
    alert(`Correcto, sumas otros ${puntos} puntos`);
}

alert(`Hola ${nombre}, como estás?, vamos a realizar un quiz. Debes contestar las 3 de 4 preguntas para aprobar.`);
alert(`Vamos con la primera pregunta`);


/* Pregunta 1 */
let pregunta1 = prompt("¿Cuántas copas libertadores tiene el Club Atletico Boca Juniors? Opciones: -7; -6; -5; -9");
let rtaCorrecta1;

while (pregunta1 != "6" && pregunta1 != "7" && pregunta1 != "5" && pregunta1 != "9"){
    alert(`${pregunta1} no es una respuesta valida.`);
    pregunta1 = prompt("¿Cuántas copas libertadores tiene el Club Atletico Boca Juniors? Opciones: -7; -6; -5; -9");
}

switch (pregunta1) {
    case "6":
        rtaCorrecta1 =  parseInt(25);
        Correcto()
    break;
    case "7":
        rtaCorrecta1 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "5":
        rtaCorrecta1 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "9":
        rtaCorrecta1 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
}


/* Pregunta 2 */
let pregunta2 = prompt("¿Quién fue el maximo goleador de BOCA JUNIORS? Opciones: -Palermo; -Tevez; -Riquelme; -Benedetto ");
let rtaCorrecta2;

while (pregunta2.toLowerCase() != "palermo" && pregunta2.toLowerCase() != "tevez" && pregunta2.toLowerCase() != "riquelme" && pregunta2.toLowerCase() != "benedetto"){
    alert(`${pregunta2} no es una respuesta valida.`);
    pregunta2 = prompt("¿Quién fue el maximo goleador de BOCA JUNIORS? Opciones: -Palermo; -Tevez; -Riquelme; -Benedetto ");
}

switch (pregunta2.toLowerCase()){
    case "palermo":
        rtaCorrecta2 = parseInt(25);
        Correcto()
    break;
    case "tevez":
        rtaCorrecta2 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "riquelme":
        rtaCorrecta2 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "benedetto":
        rtaCorrecta2 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
}


/* Pregunta 3 */
let pregunta3 = prompt("¿Qué entrenador ganó mas en Boca Juniors? Opciones: -Schelotto; -Bianchi; -Russo; -Falcioni");
let rtaCorrecta3;

while (pregunta3.toLowerCase() != "schelotto" && pregunta3.toLowerCase() != "bianchi" && pregunta3.toLowerCase() != "russo" && pregunta3.toLowerCase() != "falcioni"){
    alert(`${pregunta3} no es una respuesta valida.`);
    pregunta3 = prompt("¿Qué entrenador ganó mas en Boca Juniors? Opciones: -Schelotto; -Bianchi; -Russo; -Falcioni");
}

switch (pregunta3.toLowerCase()) {
    case "bianchi":
        rtaCorrecta3 = parseInt(25);
        Correcto()
    break;
    case "schelotto":
        rtaCorrecta3 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "russo":
        rtaCorrecta3 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "falcioni":
        rtaCorrecta3 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
}


/* Pregunta 4 */
let pregunta4 = prompt("¿Cuántos partidos le gano boca a river? Opciones: -41; -45; -47; -46");
let rtaCorrecta4;

while (pregunta4 != "41" && pregunta4 != "45" && pregunta4 != "47" && pregunta4 != "46"){
    alert(`${pregunta4} no es una respuesta valida.`);
    pregunta4 = prompt("¿Cuántos partidos le gano boca a river? Opciones: -41; -45; -47; -46");
}

switch (pregunta4){
    case "46":
        rtaCorrecta4 = parseInt(25);
        Correcto()
    break;
    case "41":
        rtaCorrecta4 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "45":
        rtaCorrecta4 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
    case "47":
        rtaCorrecta4 = parseInt(0);
        alert(`Incorrecto, no suma puntos`);
    break;
}

resultado = rtaCorrecta1 + rtaCorrecta2 + rtaCorrecta3 + rtaCorrecta4;

alert("Su cantidad de puntos fue de " + resultado);

if (resultado >= 75){
    alert("Sos un verdadero HINCHA DE BOCA");
} else if (resultado < 75){
    alert("Sos una verdadera GALLINA");
}