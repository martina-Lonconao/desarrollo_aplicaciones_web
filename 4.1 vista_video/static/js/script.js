//function onclick
function cambioVideo(elemento){
    //cambio video
    const videoGrande=document.getElementById("mainVideo");
    let sourceVideoGrande=videoGrande.scroll;
    videoGrande.src=elemento.src;
    videoGrande.src=elemento.src=sourceVideoGrande;
    //cambio de texto
    const textoGrande=document.getElementById("texto");
    let textoGrandecontent=textoGrande.textContent;
    const textopequeno=elemento.nextElementSibling; //selecciona id siguiente
    let textopequenoContent=textopequeno.textContent;
    textoGrande.textContent=textopequenoContent;
    textopequeno.textContent=textoGrandecontent;
}
