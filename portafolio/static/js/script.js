// Función para resaltar tarjetas
function resaltar(elemento) {
  elemento.style.transform = "translateY(-5px)";
  elemento.style.boxShadow = "0 10px 25px rgba(214,51,132,0.15)";
}
function quitarResaltar(elemento) {
  elemento.style.transform = "translateY(0)";
  elemento.style.boxShadow = "none";
}

// Función para capturar cambios en inputs
function capturarCambio(input) {
  console.log(`Campo cambiado: ${input.id} → ${input.value}`);
}

// Validar y mostrar mensaje del formulario
function enviarFormulario(event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value.trim();
  const mensaje = document.getElementById("mensaje").value.trim();
  const respuesta = document.getElementById("respuestaForm");

  if (nombre && mensaje) {
    respuesta.innerHTML = `<div class="alert alert-success mt-3">Gracias ${nombre}, tu mensaje ha sido enviado correctamente.</div>`;
    event.target.reset();
  } else {
    respuesta.innerHTML = `<div class="alert alert-danger mt-3">Por favor completa todos los campos.</div>`;
  }
}


document.querySelector(".html").style.width = "45%";
