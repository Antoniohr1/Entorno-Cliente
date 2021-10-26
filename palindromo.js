document.write("<pre>");
let frase = prompt("Introduce una frase");
let pregunta1 = prompt("¿Se desean contemplar o no los espacios en blanco?S/N");
let pregunta2 = prompt("¿Deben distinguirse entre mayúsculas o minúsculas?S/N");
let pregunta3 = prompt("¿Deben distinguirse o no las vocales con acento?S/N");


//Si responde que NO se quitan los espacios
if (pregunta1 == 'N') {
    frase = frase.replace(/" "/g, "");
}
//Si responde que NO se ponen todas las letras en minuscula
if (pregunta2 == 'N') {
    frase = frase.toLowerCase();
}

//Si responde que NO se cambian las vocales con acento por vocales sin acento
if (pregunta3 == 'N') {
    frase = frase.replace(/á/g, "a");
    frase = frase.replace(/Á/g, "A");
    frase = frase.replace(/é/g, "e");
    frase = frase.replace(/É/g, "E");
    frase = frase.replace(/í/g, "Í");
    frase = frase.replace(/Í/g, "Í");
    frase = frase.replace(/ó/g, "o");
    frase = frase.replace(/Ó/g, "Ó");
    frase = frase.replace(/ú/g, "u");
    frase = frase.replace(/Ú/g, "U");
}
let resultado = "";
//Bucle que compueba si es palindromo
for (let i = 0, j = frase.length - 1; i <= frase.length, j >= 0; i++, j--) {
    if (frase.charAt(i) == frase.charAt(j)) {
        resultado = "Es palindromo";
    } else {
        resultado = "No es palindromo";
        break;
    }
}

let final = alert("La frase " + frase + " " + resultado);