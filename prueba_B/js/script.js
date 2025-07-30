/*Ejercicio 2: Función con parámetros y botón
Crea un programa en JavaScript que cumpla con los siguientes requisitos:
 Debe existir un input de texto en HTML donde el usuario ingrese un número.
 Un botón debe ejecutar una función llamada contarPares que reciba como parámetro el
número ingresado y retorne la cantidad de números pares desde 1 hasta ese número.
 Muestra el resultado con alert y console.log.
 Usa for, if y return para la lógica.
Hay 5 números pares entre 1 y 10.*/

function contarPares(numero) {
    let contador=0;
    for (let i = 1; i <= numero; i++) {
        if (i % 2 === 0) {
            contador++;
        }
    }

    alert("Cantidad de números pares: " + contador);
    console.log("Cantidad de números pares: " + contador);
    return contador;
}

document.getElementById("Boton")
    .addEventListener("click", function() {
        const numeroIngresado = parseInt(document.getElementById("Input").value);
        if (!isNaN(numeroIngresado)) {
            contarPares(numeroIngresado);
        } else {
            alert("Ingresa un número válido.");
        }
    });  