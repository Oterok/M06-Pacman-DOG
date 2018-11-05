//El jugador sera un hasmap que contindra la X, Y i la Dir
var jugador = new Map();
generarJugador();
comprobarDades();


function generarJugador(){
    var pos;
    jugador.set("X", Math.floor(Math.random() * 30));
    jugador.set("Y", Math.floor(Math.random() * 30));
    //Aquestes variables son momentanies ja que en el futur no seran aleatories.
    jugador.set("Dir", Math.floor(Math.random() * 4));
    jugador.set("Teclado", Math.floor(Math.random() * 4));
}

function comprobarDades() {
    alert("Hola fantasma");
    alert("X: " + jugador.get("X"));
    alert("Y: " + jugador.get("Y"));
    alert("Dir: " + jugador.get("Dir"));
    alert("Tecla: " + jugador.get("Dir"));
}