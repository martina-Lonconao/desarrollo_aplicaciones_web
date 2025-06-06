//ejercicio 1 
/*Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos: "pan", "leche" y "huevos".
Muestra el arreglo resultante.*/

let compras=[];//arreglo vacio

function listaCompra(){
    compras.push("Pan", "leche","huevos")
    alert('lista de compras: ${compras.join("-")}');
}

//Ejercicio 2 
/*A partir del arreglo anterior (compras), utiliza pop() para quitar el último producto.
Guarda el valor eliminado en una variable y muéstralo con alert().*/

function eliminarElemento(){
    let listaCompra= compras.pop();
    alert('Elemento eliminado: ${huevos}');
}

//Ejercicio 3
/*Crea un arreglo llamado colores = ["rojo", "azul"].
Usa unshift() para agregar "amarillo" al inicio.
Muestra el arreglo completo en consola.*/





// Creación de Arreglo
let array = ["Xbox","Nintendo"];
//Creación de funciones
function usarPush(){
// Agregar al final
    let entrada = prompt("Agregar una consola de juego: ");
    array.push(entrada);
    alert("El nuevo arreglo es: " + array.join(" - "));
}
function usarPop(){
    //Elimina el último elemento
    let basurero = array.pop();
    alert(`Elemento eliminado: ${basurero}`);
}
function usarUnshift(){
    // Agregar al inicio
    let entrada = prompt("Agregar una consola de juego: ");
    array.unshift(entrada);
    alert("El nuevo arreglo es: " + array.join(" "));
}
function usarShift(){
        //Elimina el primer elemento
        let basurero = array.shift();
        alert(`Elemento eliminado: ${basurero}`);
}