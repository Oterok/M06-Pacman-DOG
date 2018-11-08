//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------Llamada a funciones y variables globales---------------------------------------
//---------------------------------------------------------------------------------------------------------------------------
var tablero;
var imprimir = "";
//El jugador y los fantamsas sera un hasmap que contindra la X, Y i la Dir
var jugador = new Map();
var grupoFantasmas = [];
var cantidadFantasmas = 3;

generarTablero();

generarJugador();

//comprobarDatosJugador(); //Variable que imprime con alert la inforamcion del jugador.

generarFantasma();
//comprobarDatosFantasma(); //Variable que imprime con alert la inforamcion de los fantasmas.

imprimirTablero(); //Impimimos por primera vez el tablero.

refrescar()//Este metodo entrara en bucle hasta que se acabe el juego.

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------TABLERO------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------



function generarTablero() {
    tablero = [
//               9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0
//               0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9 
        /*0 9*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], /*0 9*/
        /*1 8*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*4 5*/
        /*5 4*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*5 4*/
        /*6 3*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*8 1*/
        /*9 0*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*9 0*/
        /*0 9*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*0 9*/
        /*1 8*/ [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*4 5*/
        /*5 4*/ [0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 0], /*5 4*/
        /*6 3*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*8 1*/
        /*9 0*/ [0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], /*9 0*/
        /*0 9*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*0 9*/
        /*1 8*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*1 8*/
        /*2 7*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*2 7*/
        /*3 6*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*3 6*/
        /*4 5*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*4 5*/
        /*5 4*/ [0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 1, 0], /*5 4*/
        /*6 3*/ [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0], /*6 3*/
        /*7 2*/ [0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0], /*7 2*/
        /*8 1*/ [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0], /*8 1*/
        /*9 0*/ [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], /*9 0*/
//               9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0  9  8  7  6  5  4  3  2  1  0 
//               0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9  0  1  2  3  4  5  6  7  8  9 
    ];
}


//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------JUGADOR------------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------



function generarJugador() {
    var pos = posicionValida();
    jugador.set("X", pos[0]);
    jugador.set("Y", pos[1]);
    //Aquestes variables son momentanies ja que en el futur no seran aleatories.
    jugador.set("Dir", Math.floor(Math.random() * 4));
    jugador.set("Teclado", Math.floor(Math.random() * 4));
}

function comprobarDatosJugador() {
    alert("X: " + jugador.get("X"));
    alert("Y: " + jugador.get("Y"));
    alert("Dir: " + jugador.get("Dir"));
    alert("Tecla: " + jugador.get("Dir"));
}

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------FANTASMAS----------------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

function movimientoFantasma() {
    for (var i = 0; i != cantidadFantasmas; i++) {
        var variables = movimientoValido(grupoFantasmas[i].get("X"), grupoFantasmas[i].get("Y"), grupoFantasmas[i].get("Dir"));
        grupoFantasmas[i].set("X", variables[0]);
        grupoFantasmas[i].set("Y", variables[1]);
        grupoFantasmas[i].set("Dir", variables[2]);
    }
}

function generarFantasma() {
    for (var i = 0; i != cantidadFantasmas; i++) {
        var pos = posicionValida();
        var fantasma = new Map();
        fantasma.set("X", pos[0]);
        fantasma.set("Y", pos[1]);
        fantasma.set("Dir", direccionInicialValida(fantasma.get("X"), fantasma.get("Y")));
        grupoFantasmas[i] = fantasma;
    }

}

function comprobarDatosFantasma() {
    for (var i = 0; i != cantidadFantasmas; i++) {
        alert("Fantasma" + i + "-X: " + grupoFantasmas[i].get("X"));
        alert("Fantasma" + i + "-Y: " + grupoFantasmas[i].get("Y"));
        alert("Fantasma" + i + "-Dir: " + grupoFantasmas[i].get("Dir"));

    }
}

//---------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------VARIABLES COMUNAS--------------------------------------------------------------
//---------------------------------------------------------------------------------------------------------------------------

function refrescar() {
    document.body.innerHTML = "";
    movimientoFantasma();
    //comprobarDatosFantasma();
    imprimirTablero();
    setInterval('refrescar()', 100);
}

function movimientoValido(posiX, posiY, dir) {
    //alert("dir:" + dir);
    //0=Up(y+1), 1=Down(y-1), 2=Left(x-1), 3=Right(x+1), 4=Stop
    var direccionValida = [0, 0, 0, 0, 0];
    var variables = [0, 0, 0]; //Esta variable devolvera la X, la Y y la dir.
    //El switch comprueva donde se podra mover en funcion de la dirección que se tenia, 
    //no permite volver atras para evitar que un fantasma se quede siempre en dos casillas dando vueltas.
    switch (dir) {
        case 0:
            //alert("0");
            if (tablero[posiX][posiY + 1] == 1) {
                direccionValida[0] = 1
            }
            if (tablero[posiX - 1][posiY] == 1) {
                direccionValida[2] = 1
            }
            if (tablero[posiX + 1][posiY] == 1) {
                direccionValida[3] = 1
            }
            break;
        case 1:
            //alert("1");
            if (tablero[posiX][posiY - 1] == 1) {
                direccionValida[1] = 1
            }
            if (tablero[posiX - 1][posiY] == 1) {
                direccionValida[2] = 1
            }
            if (tablero[posiX + 1][posiY] == 1) {
                direccionValida[3] = 1
            }
            break;
        case 2:
            //alert("2");
            if (tablero[posiX][posiY + 1] == 1) {
                direccionValida[0] = 1
            }
            if (tablero[posiX][posiY - 1] == 1) {
                direccionValida[1] = 1
            }
            if (tablero[posiX - 1][posiY] == 1) {
                direccionValida[2] = 1
            }
            break;
        case 3:
            //alert("3");
            if (tablero[posiX][posiY + 1] == 1) {
                direccionValida[0] = 1
            }
            if (tablero[posiX][posiY - 1] == 1) {
                direccionValida[1] = 1
            }
            if (tablero[posiX + 1][posiY] == 1) {
                direccionValida[3] = 1
            }
            break;
    }
    //El while sirve para escoger una dirección aleatoria, en función 
    //de la variable direccionValida, un array que contendra las direcciones
    //a los que los fantasmas podran ir.
    while (direccionValida[dir] != 0) {
        dir = Math.floor(Math.random() * 4);
    }

    variables[2] = dir; //Contien la dirección del fantasma.
    switch (dir)
    {
        case 0:
            //alert("Up");
            variables[0] = posiX; //Contien la X del fantasma.
            variables[1] = posiY + 1; //Contien la Y del fantasma.
            break;
        case 1:
            //alert("Down");
            variables[0] = posiX; //Contien la X del fantasma.
            variables[1] = posiY - 1; //Contien la Y del fantasma.
            break;
        case 2:
            //alert("Left");
            variables[0] = posiX - 1; //Contien la X del fantasma.
            variables[1] = posiY; //Contien la Y del fantasma.
            break;
        case 3:
            //alert("Right");
            variables[0] = posiX; //Contien la X del fantasma.
            variables[1] = posiY + 1; //Contien la Y del fantasma.
            break;
    }
    return variables;
}

function direccionInicialValida(posiX, posiY) {
    //0=Up, 1=Down, 2=Left, 3=Right, 4=Stop
    var direccionValida = [0, 0, 0, 0, 0];
    var count = 5;
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

    while (direccionValida[count] != 0) {
        count = Math.floor(Math.random() * 4);
    }
    return count;
}

function posicionValida() {
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
            } else if (grupoFantasmas[0].get("X") == x && grupoFantasmas[0].get("Y") == y) {
                document.write("F1" + "&nbsp");
            } else if (grupoFantasmas[1].get("X") == x && grupoFantasmas[1].get("Y") == y) {
                document.write("F2" + "&nbsp");
            } else if (grupoFantasmas[2].get("X") == x && grupoFantasmas[2].get("Y") == y) {
                document.write("F3" + "&nbsp");
            } else {

                //Se podra poner document.write(tablero[x][y] + "&nbsp"); sin el 
                //if y el else, pero por ahora quiero que no se impriman los 0.
                //Solo el camino.
                if (tablero[x][y] == 1) {
                    document.write(tablero[x][y] + "&nbsp");
                } else {
                    document.write("0" + "&nbsp");
                }
            }

        }
        document.write("</br>");
    }
}
