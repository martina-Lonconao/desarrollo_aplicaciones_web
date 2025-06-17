/* Ejercicio 1: Contador del 1 al N
Pide al usuario un número con prompt() y usa un for para mostrar los números del 1 hasta ese número.*/

function contarHastaN() {
    let n = parseInt(prompt("Ingresa el número hasta donde quieres contar!"));
    let numeros = [];
    // Bucle for para contar hasta N
    for (let i = 1; i <= n; i++) {
        numeros.push(i);
    }
    document.getElementById("resultado1").innerHTML =
        `<p>El conteo de 1 hasta ${n} es el siguiente:</p><br>
        <strong>${numeros.join(" - ")}</strong>`;
} 

/* Ejercicio 2: Suma de 5 números
Con un while, pide 5 números al usuario (uno por uno con prompt()) y muestra la suma total en pantalla.*/

function sumarCincoNumeros(){
    let suma=0;
    let contador=0;
    while(contador <5){
        let numero =parseFloat(prompt("ingresa un numero"))
        suma+= numero;
        contador++;
    }
    document.getElementById("resultado2").innerHTML=
    `<p> La suma de los 5 numeros es: <strong> ${suma} </strong> </p>`
}

/* Ejercicio 3: Mostrar solo los pares entre 1 y 20
Usa un for para mostrar en pantalla solo los números pares del 1 al 20.*/

function mostrarPares(){
    let pares=[];
    for(let i=1; i <=20; i++){
        if(i % 2 ===0){
            pares.push(i);
        }
    }
    document.getElementById("resultado3").innerHTML=
    `<p>Los numeros pares del 1 al 20 son : </p> <br> <strong>${pares.join("-")}</strong>`;
}


/* Ejercicio 4: Contador regresivo con condición
Pide un número al usuario y, usando un while, cuenta regresivamente hasta 0. Si el número es menor que 0, muestra "Número no válido".*/

function contadorRegresivo(){
    let numero=parseInt(prompt("Ingresa un numero para contar regresivamente:"));
    let resultado="";
    if(numero<0){
        resultado="Numero no válido";
    }else{
        while(numero>=0){
            resultado+=numero + "";
            numero--;
        }
    }

    document.getElementById("resultado4").innerHTML=
    `<p>${resultado}</p>`;
}

/*Ejercicio 5: Mostrar la tabla de multiplicar de un número
Solicita al usuario un número y usa un for para mostrar su tabla de multiplicar del 1 al 10.*/

function tablaMultiplicar(){
    let numero =parseInt(prompt("Ingresa un numero para mostrar su tabla de multiplicar:"));
    let resultado="";
    for(let i=1; i<=10; i++){
        resultado+= `${numero} x ${i}=${numero * i} <br>`;
    }
    document.getElementById("resultado5").innerHTML=
    `<p>La tabla de multiplicar del ${numero} es: </p> <br> <strong>${resultado}</strong>`;
}

/*Ejercicio 6: Sumar hasta que se ingrese cero
Con while, sigue pidiendo números con prompt() y súmalos, hasta que el usuario escriba 0. Muestra el total acumulado.*/

function sumarHastaCero(){
    let suma =0;;;
}
