// console.log ("¿Se esta vinculando bien?") para comprobrar si se vinculo de forma correrar el java con el HTML
// const - se utiliza para para llamar a una constante, así como let.

const cuadroTexto = document.getElementById ("cuadroTexto");

const botonEncriptar = document.getElementById ("botonEncriptar");

const botonDesencriptar = document.getElementById ("botonDesencriptar");

const cuadroDerecha = document.getElementById ("cuadroDerecha");

const mensajeFinal = document.getElementById ("mensajeFinal");

const botonCopiar = document.getElementById ("botonCopiar");

const muneco = document.getElementById ("muneco");

const derechaTexto = document.getElementById ("derechaTexto");

// Remplezar las vocales para encriptar
let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a","ai"],
    ["u", "ufat"],
]
// Se pone entre comillas para que entienda que hay que remplazar esas palabras por las ontras.

const remplace = (nuevoValor) => {
        // Esto es para que se vea en la cuadrilla de texto de la página
        mensajeFinal.innerHTML = nuevoValor;
        cuadroTexto.value="" 
        muneco.classList.add("oculto")
        derechaTexto.style.display = "none";
        botonCopiar.style.display = "block";
        cuadroDerecha.classList.add("tamano-ajustado");
        mensajeFinal.classList.add("tamano-ajustado");
}

// Para hacer click en boton y que encripte las palabras
botonEncriptar.addEventListener("click", () => {
    const texto = cuadroTexto.value.toLowerCase()
    // != es para decir que es diferentes
    if(texto != ""){
        function encriptar (textoNuevo){
            for(let i = 0; i < remplazar.length; i++ ){
                if(textoNuevo.includes(remplazar[i][0])){
                    textoNuevo = textoNuevo.replaceAll(remplazar[i][0], remplazar[i][1]);
                };
            };
            return textoNuevo
        };
    } else {
        alert ("Ingresa algún texto");
    }
    remplace(encriptar(texto));
    // const textoEncriptado = encriptar(texto);


});

//  Cuando boton desencriptar escucha el escucha el clik, entonces ejecuta la siguiente función
botonDesencriptar.addEventListener("click", () => {
    const texto = cuadroTexto.value.toLowerCase ();
    if (texto != "") {
        function desencriptar (textoNuevo) {
            for (let i = 0; i < remplazar.length; i++){
                if (textoNuevo.includes(remplazar[i][1])){
                    textoNuevo = textoNuevo.replaceAll(remplazar[i][1], remplazar [i][0])
                };
            };
            return textoNuevo
        };
    } else {
        alert ("Ingresa el texto a desencriptar");
    }
    // const textoDesencriptado = desencriptar(texto)
    remplace(desencriptar(texto));

});

botonCopiar.addEventListener("click", () => {
    let texto = mensajeFinal;
    // Funcion no compatible con celular
    navigator.clipboard.writeText(texto.value);
    // texto.select();
    // document.execCommand("Copiado");
    alert("Texto copiado.");

    mensajeFinal.innerHTML = "";
    muneco.classList.remove("oculto")
    derechaTexto.style.display = "block";
    botonCopiar.style.display = "none";
    cuadroDerecha.classList.remove("tamano-ajustado");
    mensajeFinal.classList.remove("tamano-ajustado");
    cuadroTexto.focus();

});
