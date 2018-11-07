//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------TABLERO------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
var tablero;
var imprimir = "";
generarTablero();


function generarTablero() {
    tablero = [
//               9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0
//               0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9 
        /*0 9*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*0 9*/
        /*1 8*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*4 5*/
        /*5 4*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*5 4*/
        /*6 3*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*8 1*/
        /*9 0*/ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], /*9 0*/
        /*0 9*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*0 9*/
        /*1 8*/ [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*4 5*/
        /*5 4*/ [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1], /*5 4*/
        /*6 3*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*8 1*/
        /*9 0*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*9 0*/
        /*0 9*/ [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], /*0 9*/
        /*1 8*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*4 5*/
        /*5 4*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*5 4*/
        /*6 3*/ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*8 1*/
        /*9 0*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*9 0*/
//               9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0 
//               0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9 
    ];
}


//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------JUGADOR------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
//El jugador sera un hasmap que contindra la X, Y i la Dir
var jugador = new Map();
generarJugador();
//comprobarDadesJugador();


function generarJugador() {
    var pos = posicioValida();
    jugador.set("X", pos[0]);
    jugador.set("Y", pos[1]);
    //Aquestes variables son momentanies ja que en el futur no seran aleatories.
    jugador.set("Dir", Math.floor(Math.random() * 4));
    jugador.set("Teclado", Math.floor(Math.random() * 4));
}

function comprobarDadesJugador() {
    alert("X: " + jugador.get("X"));
    alert("Y: " + jugador.get("Y"));
    alert("Dir: " + jugador.get("Dir"));
    alert("Tecla: " + jugador.get("Dir"));
}

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------FANTASMAS----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

//El fantasma sera un hasmap que contindra la X, Y i la Dir
var grupFantasmas = [];
var quantitatFantasmas = 3;
generarFantasma();
//comprobarDadesFantasma();


function generarFantasma() {

    for (var i = 0; i != quantitatFantasmas; i++) {
        var pos = posicioValida();
        var fantasma = new Map();
        fantasma.set("X", pos[0]);
        fantasma.set("Y", pos[1]);
        fantasma.set("Dir", direccionValida(fantasma.get("X"), fantasma.get("Y")));
        grupFantasmas[i] = fantasma;
    }

}

function comprobarDadesFantasma() {
    for (var i = 0; i != quantitatFantasmas; i++) {
        alert("Fantasma" + i + "-X: " + grupFantasmas[i].get("X"));
        alert("Fantasma" + i + "-Y: " + grupFantasmas[i].get("Y"));
        alert("Fantasma" + i + "-Dir: " + grupFantasmas[i].get("Dir"));
    }
}

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------VARIABLES COMUNAS--------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
posicioValida();
imprimirTablero();
var posValida;

function direccionValida(posiX, posiY) {
    //0=Up, 1=Down, 2=Left, 3=Right, 4=Stop
    var direccionValida = [0, 0, 0, 0, 0];
    var count=5;
    if (tablero[posiX][posiY + 1] == 1) {
        direccionValida[0] = 1
    }
    if (tablero[posiX][posiY - 1] == 1) {
        direccionValida[1] = 1
    }
    if (tablero[posiX - 1][posiY] == 1) {
        direccionValida[2] = 1
    }
    if (tablero[posiX + 1][posiY] == 1) {
        direccionValida[3] = 1
    }
    while(direccionValida[count] == 0){
        count = Math.floor(Math.random() * 4);
    }
    return count;
}

function posicioValida() {
    posValida = [0, 0];
    while (tablero[posValida[0]][posValida[1]] == 0) {
        posValida[0] = Math.floor(Math.random() * 30); //Es la X
        posValida[1] = Math.floor(Math.random() * 30); //Es la Y
        //alert("X: " + posValida[0]);
        //alert("Y: " + posValida[1]);
    }

    return posValida;
}

function imprimirTablero() {
//    El siguinete codigo comentado sirve para impimir una ayuda para saber la posicion Y del tablero.
//    document.write("Y:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp");
//    for (var x = 0; x <= 3 - 1; x++) {
//        for (var y = 0; y <= 10 - 1; y++) {
//            document.write(y + "&nbsp");
//        }
//    }
//document.write("</br>");

    for (var x = 0; x <= tablero.length - 1; x++) {
//    El siguinete codigo comentado sirve para impimir una ayuda para saber la posicion X del tablero.
//        if (x < 10) {
//            document.write("X:0" + x + ":&nbsp&nbsp&nbsp&nbsp");
//        } else {
//            document.write("X:" + x + ":&nbsp&nbsp&nbsp&nbsp");
//        }
        for (var y = 0; y <= tablero[0].length - 1; y++) {
            if (jugador.get("X") == x && jugador.get("Y") == y) {
                document.write("J" + "&nbsp");
            } else if (grupFantasmas[0].get("X") == x && grupFantasmas[0].get("Y") == y) {
                document.write("F1" + "&nbsp");
            } else if (grupFantasmas[1].get("X") == x && grupFantasmas[1].get("Y") == y) {
                document.write("F2" + "&nbsp");
            } else if (grupFantasmas[2].get("X") == x && grupFantasmas[2].get("Y") == y) {
                document.write("F3" + "&nbsp");
            } else {
                document.write(tablero[x][y] + "&nbsp");
            }

        }
        document.write("</br>");
    }
}
