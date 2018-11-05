//El fantasma sera un hasmap que contindra la X, Y i la Dir
var grupFantasmas=[];
var quantitatFantasmas = 3;
var fantasma = new Map();
generarFantasma();
comprobarDades();


function generarFantasma() {
    
    for (var i = 0; i != quantitatFantasmas; i++) {
        fantasma.set("X", Math.floor(Math.random() * 30));
        fantasma.set("Y", Math.floor(Math.random() * 30));
        fantasma.set("Dir", Math.floor(Math.random() * 4));
        grupFantasmas[i]=fantasma;
    }

}

function comprobarDades() {
    for (var i = 0; i != quantitatFantasmas; i++) {
        alert("Fantasma"+i+"-X: "+grupFantasmas[i].get("X"));
        alert("Fantasma"+i+"-X: "+grupFantasmas[i].get("Y"));
        alert("Fantasma"+i+"-X: "+grupFantasmas[i].get("Dir"));
    }
}


