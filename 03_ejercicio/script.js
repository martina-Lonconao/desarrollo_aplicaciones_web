console.log("conectado correctamente...");

/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

let arreglo=[10,20,30,40,50,60,70]

function diferenciaCentroExtremos () {
    let centro = arreglo [3];
    let extremos=arreglo[0] + arreglo[arreglo.length-1]
    let diferencia = centro-extremos
    alert("La diferencia entre el centro y los extremos es:" + diferencia);
    }
