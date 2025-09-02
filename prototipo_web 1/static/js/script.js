/*Instrucción:
sistema que tome los valores ingresados (presion ,pulso y temperatura) y determine si es critico o no es grave .*/

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("healthForm");
    const resultDiv = document.getElementById("result");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const pressure = parseFloat(document.getElementById("pressure").value);
        const pulse = parseFloat(document.getElementById("pulse").value);
        const temperature = parseFloat(document.getElementById("temperature").value);

        let resultText = "";

        if (pressure > 180 || pulse > 120 || temperature > 39) {
            resultText = "Estado crítico";
        } else {
            resultText = "Estado no grave";
        }

        resultDiv.textContent = resultText;
    });
});



