/* Ejercicio 1: Verificar mayoría de edad
Crea una variable edad con un valor numérico.
Si la edad es mayor o igual a 18, muestra
"Acceso permitido".
 Si no, muestra "Acceso denegado". */

function mayoriaEdad(){
    let edad = parseInt(prompt("Ingrese Edad: "));
    if(edad >= 18){
        document.getElementById("resultado1").innerHTML =
        `<p>Es mayor de Edad: ${edad} </p>`;
    }else if (edad <= 17 && edad >= 0){
        document.getElementById("resultado1").innerHTML =
        `<p>Es menor de Edad: ${edad} </p>`;
    } else {
        document.getElementById("resultado1").innerHTML =
        `<p>El valor <strong>${edad}</strong> es invalido.</p>`;
    }
}

/* Ejercicio 2: Añadir producto si no está
js
let productos = ["pan", "leche", "queso"];

Declara la variable nuevoProducto.
Si productos no incluye el nuevo producto (agrégalo con push() y muestra el arreglo.
Si ya está, muestra "Producto ya ingresado". */
function mostrarNuevoProducto(){
        let productos = ["pan", "leche", "queso"];
    let nuevoProducto = prompt("Ingrese un nuevo Producto");
    if (productos[0] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[1] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else if(productos[2] == nuevoProducto){
        document.getElementById("resultado2").innerHTML =
        `<p>El producto: <strong>${nuevoProducto}</strong> ingresado.</p>`;
    } else{
        productos.push(nuevoProducto);
        document.getElementById("resultado2").innerHTML =
        `<p>Nueva lista de productos: <strong>${productos.join(" - ")}</strong> ingresado.</p>`;
    }
}





/* Ejercicio 3: Control de tareas
Declara el arreglo tareas con 6 tareas predefinidas.
Si el arreglo tiene más de 5 elementos, usa pop() para eliminar la última y muestra el arreglo.
Si tiene 5 o menos, muestra "Lista aceptable".*/


let tareas=["hacer la compra","limpiar la casa ", "estududiar para el examen", "ir al gimnasio", "leer un libro","preparar la cena"]

function controlTareas(){
    if(tareas.length >5) {
        tareas.pop();
        document.getElementById("resultado3").innerHTML=`<p>Lista de tareas actualizada:${tareas.join(",")}</p>`;
    } else if (tareas.length <=5){
        document.getElementById("resultado3").innerHTML= `<p>Lista aceptable:${tareas.join("")}</p>`;
    }
    else{
        document.getElementById("resultado3") . innerHTML=`<p>El valor <strong>${tareas.length}</strong>es invalido</p>`;
    }
}

/*ejercicio 4*/
//js
//let cola = ["sinNombre", "Pedro", "Lucía"];
//Si el primer elemento es "sinNombre", elimínalo con shift() y muestra el nuevo arreglo.
//Si no, muestra "Cola correcta".

let cola = ["sinNombre", "Pedro", "Lucía"];

function revisarCola() {
    let mensaje = "";
    
    if (cola[0].toLowerCase() === "sinnombre") {
        let a = cola.shift();
        mensaje = `<p>El primer elemento de la cola era inválido y fue eliminado.<br>El elemento eliminado fue "${a}".</p>`;
    } else {
        mensaje = `<p>La cola es correcta.<br>La cola: ${cola.join(", ")}</p>`;
    }

    document.getElementById("resultado4").innerHTML = mensaje;
}


/*ejercicio 5
Saludo condicional
//Declara la variable nombre.
//Si no está vacío, crea un arreglo saludos y usa push() para añadir "Hola, [nombre]".
//Si está vacío, muestra "Nombre no válido".*/

function saludCondicional() {
    let nombre = prompt("Ingresa tu nombre:");
    
    if (nombre.trim() !== "") {
        let saludo = [];
        saludo.push(`Hola, ${nombre}`);
        document.getElementById("resultado5").innerHTML = 
            `<p>${saludo[0]}</p>`;
    } else {
        document.getElementById("resultado5").innerHTML = 
            `<p>Nombre no válido</p>`;
    }
}


/*ejercicio 6*/

function calificarNota() {
    let nota = parseFloat(prompt("Ingrese una nota entre 1 y 7:"));
    if (nota >= 6) {
        document.getElementById("resultado6").innerHTML = "<p>Excelente</p>";
    } else if (nota >= 4) {
        document.getElementById("resultado6").innerHTML = "<p>Aprobado</p>";
    } else {
        document.getElementById("resultado6").innerHTML = "<p>Reprobado</p>";
    }
}


/*Ejercicio 7*/

function registroVisitantes() {
    let visitas = [];
    let persona = prompt("Ingrese su nombre:");
    if (persona.trim() !== "") {
        visitas.unshift(persona);
        document.getElementById("resultado7").innerHTML =
        `<p>Visitas registradas: ${visitas.join(", ")}</p>`;
    } else {
        document.getElementById("resultado7").innerHTML =
        `<p>Error: nombre vacío</p>`;
    }
}

/*ejercicio 8*/

function controlStock() {
    let stock = ["arroz", "fideos"];
    let productoSolicitado = prompt("Ingrese el producto:");
    if (stock.includes(productoSolicitado)) {
        document.getElementById("resultado8").innerHTML = `<p>Producto disponible</p>`;
    } else {
        stock.push(productoSolicitado);
        document.getElementById("resultado8").innerHTML = 
        `<p>Producto agregado al stock: ${stock.join(", ")}</p>`;
    }
}

/*ejercicio 9 */

// Ejercicio 9
function verificarInvitado() {
    let invitados = ["Ana", "Luis", "Camila"];
    let persona = prompt("Ingrese su nombre:");
    if (invitados.includes(persona)) {
        document.getElementById("resultado09").innerHTML = <p>Bienvenido, ${persona}</p>;
    } else {
        document.getElementById("resultado09").innerHTML = "<p>No estas en la lista</p>";
    }
}

// Ejercicio 10
function evaluarRol() {
    let usuarios = ["Admin", "Editor", "Invitado"];
    let rol = prompt("Ingrese el rol:");
    if (rol === "Admin") {
        usuarios.unshift(rol);
        document.getElementById("resultado10").innerHTML = "<p>Rol prioritario agregado</p>";
    } else {
        usuarios.push(rol);
        document.getElementById("resultado10").innerHTML = "<p>Rol agregado</p>";
    }
}
