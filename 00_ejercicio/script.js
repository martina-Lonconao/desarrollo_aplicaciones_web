console.log("conectado correctamente...");

/*
Enunciado:
Crea un arreglo con los días de
la semana. Luego, al hacer clic en
el botón, muestra con alert() el
día martes
usando su posición en el arreglo.
*/

function mostrarDia() {
    let dias = ["lunes", "martes", "miércoles",
        "jueves", "viernes", "sábado", "domingo"];
    alert("El último día de la semana es: "
        + dias[dias.length - 1]);
}