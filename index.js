function encriptar() {
    const texto = document.getElementById('texto').value;
    const textoEncriptado = texto.replace(/e/g, 'enter')
                                .replace(/i/g, 'imes')
                                .replace(/a/g, 'ai')
                                .replace(/o/g, 'ober')
                                .replace(/u/g, 'ufat');
    mostrarResultado(textoEncriptado);
}

// Función para desencriptar el texto
function desencriptar() {
    const texto = document.getElementById('texto').value;
    const textoDesencriptado = texto.replace(/enter/g, 'e')
                                    .replace(/imes/g, 'i')
                                    .replace(/ai/g, 'a')
                                    .replace(/ober/g, 'o')
                                    .replace(/ufat/g, 'u');
    mostrarResultado(textoDesencriptado);
}

// Función para mostrar el resultado en la interfaz
function mostrarResultado(resultado) {
    const mensajeEncriptado = document.getElementById('mensaje-encriptado');
    const titulo = document.getElementById('titulo-mensaje');
    const parrafo = document.getElementById('parrafo');

    if (resultado.trim() === '') {
        titulo.textContent = 'Ningún mensaje encontrado';
        parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
    } else {
        titulo.textContent = 'Mensaje encriptado';
        parrafo.textContent = resultado;
    }
}

// Función para copiar el texto encriptado al portapapeles
function copiar() {
    const texto = document.getElementById('parrafo').textContent;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}