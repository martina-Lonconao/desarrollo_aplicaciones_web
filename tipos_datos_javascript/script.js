console.log("conexion establecida con JS");
// Paso 1: Declaración de variables
let numeroEntero = 10;
let numeroDecimal = 3.14;
let cadenaTexto = "Hola mundo";
let valorBooleano = true;
let arregloNumeros = [1, 2, 3, 4];
let objetoPersona = {
    nombre: "Martina",
    edad: 17
};
let valorIndefinido;
let valorNulo = null;
let identificadorUnico = Symbol("id");
let numeroGrande = 1234567890123456789012345678901234567890n;
const mes = "Mayo";

// Paso 2: Funciones para mostrar cada variable
function mostrarNumeroEntero() {
    console.log("Número Entero:", numeroEntero);
}

function mostrarNumeroDecimal() {
    console.log("Número Decimal:", numeroDecimal);
}

function mostrarCadenaTexto() {
    console.log("Cadena de Texto:", cadenaTexto);
}

function mostrarValorBooleano() {
    console.log("Valor Booleano:", valorBooleano);
}

function mostrarArregloNumeros() {
    console.log("Arreglo de Números:", arregloNumeros);
}

function mostrarObjetoPersona() {
    console.log("Objeto Persona:", objetoPersona);
}

function mostrarValorIndefinido() {
    console.log("Valor Indefinido:", valorIndefinido);
}

function mostrarValorNulo() {
    console.log("Valor Nulo:", valorNulo);
}

function mostrarIdentificadorUnico() {
    console.log("Identificador Único (Symbol):", identificadorUnico.toString());
}

function mostrarNumeroGrande() {
    console.log("Número Grande (BigInt):", numeroGrande);
}

function mostrarMes() {
    console.log("Mes (constante):", mes);
}

// Paso 3: Función de operación
function operacion(a, b) {
    let resultado = a + b;
    console.log("Resultado de la suma:", resultado);
    return resultado;
}

// Paso 4: Llamada a las funciones
mostrarNumeroEntero();
mostrarNumeroDecimal();
mostrarCadenaTexto();
mostrarValorBooleano();
mostrarArregloNumeros();
mostrarObjetoPersona();
mostrarValorIndefinido();
mostrarValorNulo();
mostrarIdentificadorUnico();
mostrarNumeroGrande();
mostrarMes();

operacion(5, 7);