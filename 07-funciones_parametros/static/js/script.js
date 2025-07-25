/*Ejercicio 1: Repetir una palabra N veces
Solicita al usuario una palabra y un
número usando prompt. Luego, crea una función
que reciba ambos valores como parámetros,
repita la palabra N veces utilizando un bucle,
y retorne el resultado completo como una
cadena de texto. Muestra el resultado con
alert. */

function repetirPalabra(palabra, veces){
    let resultado = "";
    for(let i = 0; i < veces; i++){
        resultado += `${palabra} `//  'hola hola hola hola '
    }
    return resultado.trim(); // trim elimina espacios 'hola hola hola hola'
    // en los extremos
}

function mostrarPalabras(){
let input1 = document.getElementById("input1");
let palabra = input1.value;
let numero = parseInt(prompt("Ingrese cantidad a repetir"));

let resultadoFinal = repetirPalabra(palabra, numero);

document.getElementById("resultado1").textContent = resultadoFinal;
}


/* Ejercicio 2 :Comparar dos números
Usa prompt para pedir dos números
Crea una función con dos parámetros que compare los valores y retorne 
un mensaje indicando cuál número es mayor,
menor o si son iguales. Muestra el mensaje con alert.*/

function CompararNumeros(num1, num2){
    if(num1 > num2){
      return `${num1} es mayor que ${num2}`;
    } else if (num1 < num2){
      return `${num1} es menor que ${num2}`;
    }else {
      return `${num1} es igual a ${num2}`;
    }
}
function mostrarPalabras (){
  let input2 = document.getElementById("input2");
  let numero1=parseInt(input2.value);
  let numero2 =parseInt(prompt("Ingrese segundo número"));

  let resultadoFinal= CompararNumeros(numero1, numero2 ) }
  document.getElementById("resultado2).textContent= resultadoFinal;)")


/* Ejercicio 3: Verificar si un número es par o impar
Solicita un número usando prompt. Diseña una función que reciba ese número como parámetro, 
determine si es par o impar, y retorne un
mensaje con el resultado. Muestra ese mensaje al usuario con alert.*/

function VerificarParImpar(numero){
  if (numero % 2===0) {
    return `${numero} es un numero par`;
  } else {
    return `${numero} es un numero impar`;
  }
}

function MostrarParImpar(){
  let input3=document.getElementById("input3");
  let numero=parseInt(input3.value);

  let resultadoFinal=VerificarParImpar(numero);
  document.getElementById("resultado3").textContent=resultadoFinal;
  alert(resultadoFinal);
}


/* Ejercicio 4: Validar si un número es primo
Captura un número usando prompt. Luego, crea una función que reciba ese número 
como parámetro y retorne un mensaje indicando 
si el número es primo o no. Muestra el resultado con alert.*/

function esPrimo(numero){
    if (numero <=1) return `${numero} no es un número primo`;
    for (let i =2; i <= Math.sqrt(numero); i++){
        if (numero % i === 0){
            return `${numero} no es un numero primo`;
        }

    }

    return `${numero} es un numero primo`; 
  }
  function mostrarPrimo(){
    let input4 = document.getElementById("input4");
    let numero= parseInt(input4.value);
    let resultadoFinal = esPrimo(numero);
    document.getElementById("resultado4").textContent=resultadoFinal;
  }


/* Ejercicio 5: Calcular potencia con bucle
Pide al usuario una base y un exponente mediante input. Usa una función que reciba ambos valores
como parámetros, calcule la potencia utilizando un bucle, y retorne el resultado. 
Finalmente, muestra el valor calculado en html.*/

function calcularPotencia(base,exponente){
    let resultado =1 ;
    for (let i=0 ; i < exponente; i++){
       resultado *= base; 
    } 
    return resultado;
}

function mostrarPotencia(){
    let input5 = document.getElementById("input5");
    let base = parseInt(input5.value);
    let exponente = parseInt(prompt("Ingrese el exponente"));

    let resultadoFinal = calcularPotencia(base, exponente);
    document.getElementById("resultado5").textContent = `El resultado de ${base} elevado a ${exponente} es: ${resultadoFinal}`;
}
document.getElementById("btn1").addEventListener("click", mostrarPalabras);
document.getElementById("btn2").addEventListener("click", mostrarPalabras);         