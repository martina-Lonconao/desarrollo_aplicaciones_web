//ejercicio 1 
/*Crea un arreglo vacío llamado compras.
Usa push() para agregar los siguientes elementos: "pan", "leche" y "huevos".
Muestra el arreglo resultante.*/

let compras = []; // arreglo vacío 

function listaCompra() {
    compras = [];
    compras.push("Pan", "leche", "huevos");
    alert(`lista de compras: ${compras.join("-")}`);
}

//Ejercicio 2 
/*A partir del arreglo anterior (compras), utiliza pop() para quitar el último producto.
Guarda el valor eliminado en una variable y muéstralo con alert().*/

function eliminarElemento(){
    let compraEliminada= compras.pop();
    alert(`Elemento eliminado: ${compraEliminada}`);
}

//Ejercicio 3
/*Crea un arreglo llamado colores = ["rojo", "azul"].
Usa unshift() para agregar "amarillo" al inicio.
Muestra el arreglo completo en consola.*/

let colores =[ "rojo", "azul"];

function agregarcolor(){
    let entrada = prompt("Agregar un color");
    colores.unshift(entrada);
    alert(`el color agregado es ${entrada}\n colores actualizados:$(colores)`)
}


//ejercicio 4
/*Usa el arreglo colores y elimina el primer elemento con shift().
Guarda el valor eliminado y muéstralo con alert().*/

function eliminarPrimerColor() {
    let colores = ["amarillo", "rojo", "azul"]; // arreglo que ya tiene elementos
    let eliminado = colores.shift(); // elimina el primer elemento
    alert("Color eliminado: " + eliminado);
}


//ejercicio 5
/* Ejercicio 5: Combinación de métodos
Crea un arreglo llamado numeros = [10, 20, 30].
Agrega 40 al final.
Quita el primer número.
Agrega 5 al inicio.
Elimina el último número.
Muestra el arreglo final usando console.log().*/

let numeros=[10,20,30]
function agregarNumeros(){
    numeros.push(40)
    alert(`Le agregamos 40 al final`)
    numeros.shift()
    alert(`le quitamos el primer numero`)
    numeros.unshift(5)
    alert(`le agregamos un 5 al final`)
    numeros.pop()
    alert(`eliminamos el ultimo numero`)
    alert(`El arreglo quedo asi $(numeros.joing(-->"))`)
}

//Ejercicio 6

let orden=[]

function agregarOrdenInverso(){
    let num1=prompt("ingresa los numero 1 ");
    orden.unshift(num1);
    let num2=prompt("ingresa los numero 2 ");
    orden.unshift(num2);
    let num3=prompt("ingresa numero 3");
    orden.unshift(num3);
}
console.log(orden)

//ejercicio 7


function historialMensaje(){
    historial.push("Hola","¿como estas?", "adios.");
    let eliminado = historial.pop();
    alert(`ultimo mensaje eliminado: ${eliminado}`);
    alert(`Historial de mensaje actualizado:${historial.join(", ")}`)
}


//ejercicio 8
let cola  = ["cliente","cliente2", "cliente3"]
function actualizarCola(){
    cola.shift();
    cola.push("cliente4");
    alert("cola:" + cola )
}



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