document.write("<pre>")
let numero = parseInt(prompt("Introduce el numero"))
let cadena = "";

//Bucle que saca el numero binario de la variable numero
for (let i = 32; i >= 0; i--) {

    let binario = (numero & 1);
    document.write(binario);
    numero = numero >> 1;
    cadena = cadena + binario;


}


//Esta funcion la utilizo para invertir la cadena que hemos generado antes para que visualmente sea igual a como se representa en el ejercicio
function invertir(cadena) {
    let posicion = cadena.length;
    let cadenaInvertida = "";
    while (posicion >= 0) {
        cadenaInvertida = cadenaInvertida + cadena.charAt(posicion);
        posicion--;

    }
    return cadenaInvertida;
}
//----------------------------------------------------------------
// Variable que almacena el resultado de la funcion invertir
let cadena2 = invertir(cadena);
document.write("<br>")
document.write("<table>")
document.write("<tr>");
for (let i = 31; i >= 0; i--) {
    document.write("<td>")
    document.write("B" + i + "  ");
    document.write("</td>")

}
document.write("</tr>")
document.write("<tr>")
    //Bucle for que saca caracter a caracter para que los intruduzca en una celda independiente
for (let k = 1; k < cadena2.length; k++) {
    document.write("<td>")
    document.write(cadena2.charAt(k));
    document.write("</td>");
}
document.write("</tr>");

document.write("</table>");



document.write(cadenaInvertida);


// let a = 5