
/*Lógica requerida (JS):
Validar campos (longitud de nombre, rango de edad, selección de jornada, aceptación del reglamento).
Normalizar el nombre (trim y capitalizar la primera letra de cada palabra).
Mostrar en un <p class="resultado"> un saludo formal que incluya nombre, edad y curso, jornada.
Si falta información o hay errores, mostrar en <p class="error"> un mensaje claro y no técnico.
Arreglos y bucles:
Mantener un arreglo de registros; al enviar, push del nuevo objeto {nombre, edad, curso, jornada}.
Recorrer el arreglo para contar cuántos estudiantes por jornada y mostrar un resumen (ej.: “Registrados: 3 en Mañana, 2 en Tarde”).
Extensión opcional: botón “Limpiar” que reinicie el formulario y la */

// Selección de elementos del DOM
const form = document.getElementById('registroForm');
const datosIngresados = document.getElementById('datosIngresados');
const registros = [];
const resultado = document.createElement('p');
const error = document.createElement('p');
form.appendChild(resultado);
form.appendChild(error);

//