/*Instrucción:
Crea una función llamada filtrarMultiples que:
Reciba dos parámetros: un número limite y otro número multiplo.
Retorne un arreglo con todos los números desde 1 hasta limite que sean divisibles por multiplo.
Muestra el resultado con html (formateado como cadena).
Usa input para pedir limite y multiplo.*/

function filtrarMultiples(numeroLimite, numeroMultiplo){
    let resultado = []
    for(let i = 1; i <= numeroLimite ; i++)
    {
        if (i % numeroMultiplo === 0)
        {
            resultado.push(i);
        }    
    }
    return resultado
}

function multiplos(){
    inputLimite = document.getElementById("limite")
    inputMultiplo = document.getElementById("multiplo")
    limite = parseInt(inputLimite.value)
    multiplo = parseInt(inputMultiplo.value)

    let numeros = filtrarMultiples(limite, multiplo);

    if (numeros.length === 0) {
        document.getElementById("resultado1").innerText = "No se encontraron múltiplos.";
    } else {
        document.getElementById("resultado1").innerText = "Números encontrados: " + numeros.join(", ");
    }

    inputLimite.value = "";
    inputMultiplo.value = "";
    inputMultiplo.focus()
}