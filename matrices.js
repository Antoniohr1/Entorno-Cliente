let selecion = prompt("Elige que multiplicación vas a utilizar. Escalar(E)/Dos Matrices(M)");
document.write("<pre>");
if (selecion == 'E') {
    let vmin = -10;
    let vmax = 10;
    let numRand = Math.floor(Math.random() * (vmax - (vmin) - 1) + vmin);
    let fila = prompt("Introduce el número de filas");
    let columna = prompt("Introduce el número de columnas");
    let real = prompt("Introduce el número con el que deseas multiplicar");
    //Creamos y le damos valor a la primera matriz
    let matriz = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna);
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = Math.floor(Math.random() * (vmax - (vmin) - 1) + (vmin));
            document.write(matriz[i][j] + "  ");
            /*if (i % 3 == 0 && j % 3 == 0) {
                document.write("<br>");
            }*/
        }
        document.write("<br>");
    }
    for

}