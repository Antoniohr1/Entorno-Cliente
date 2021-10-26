let selecion = prompt("Elige que multiplicación vas a utilizar. Escalar(E/e)/Dos Matrices(M/m)");
document.write("<pre>");

//Multiplicación Escalar
if (selecion == 'E' || selecion == 'e') {
    let vmin = -10;
    let vmax = 10;
    //Variable que genera un numero aleatorio entre los valores de vmin y vmax
    let numRand = Math.floor(Math.random() * (vmax - (vmin) - 1) + vmin);
    let fila = prompt("Introduce el número de filas");
    let columna = prompt("Introduce el número de columnas");
    let real = prompt("Introduce el número con el que deseas multiplicar");

    //Creamos e introducimos valores a la primera matriz
    document.write("<h2>Primera Matriz</h2>")
    let matriz = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matriz[i] = new Array(columna);
        for (let j = 0; j < columna; j++) {
            matriz[i][j] = Math.floor(Math.random() * (vmax - (vmin) - 1) + (vmin));
            document.write(matriz[i][j] + "  ");
        }
        document.write("<br>");
    }
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------
    document.write("<br><br>");
    document.write("<h2>Resultado de Multiplicación</h2>")
        //Recorremos la primera matriz y  multiplicamos cada valor por la variable "real" y almacenamos el resultado en una posición de una nueva matriz que hemos creado
    let matrizResultado1 = new Array(fila);
    for (let i = 0; i < fila; i++) {
        matrizResultado1[i] = new Array(columna);
        for (let j = 0; j < columna; j++) {
            matrizResultado1[i][j] = real * matriz[i][j];
            document.write(matrizResultado1[i][j] + "  ");
        }
        document.write("<br>");
    }

}
//Multiplicación de dos matrices
if (selecion == 'M' || selecion == 'm') {
    let vmin = -10;
    let vmax = 10;
    //Variable que genera un numero aleatorio entre los valores de vmin y vmax
    let numRand = Math.floor(Math.random() * (vmax - (vmin) - 1) + vmin);
    let filaMatriz1 = prompt("Introduce el número de filas de la matriz 1");
    let columnaMatriz1 = prompt("Introduce el número de columnas de la matriz 1");
    let filaMatriz2 = prompt("Introduce el número de filas de la matriz 2");
    let columnaMatriz2 = prompt("Introduce el número de columnas de la matriz 2");
    if (columnaMatriz1 != filaMatriz2) {
        location.reload();
    } else {
        //Creamos e introducimos valores a la primera matriz
        document.write("<h2>Primera Matriz</h2>")
        let matriz = new Array(filaMatriz1);
        for (let i = 0; i < filaMatriz1; i++) {
            matriz[i] = new Array(columnaMatriz1);
            for (let j = 0; j < columnaMatriz1; j++) {
                matriz[i][j] = Math.floor(Math.random() * (vmax - (vmin) - 1) + (vmin));
                document.write(matriz[i][j] + "  ");
            }
            document.write("<br>");
        }
        document.write("<br><br>");
        document.write("<h2>Segunda Matriz</h2>")
            //Recorremos la primera matriz y  multiplicamos cada valor por la variable "real" y almacenamos el resultado en una posición de una nueva matriz que hemos creado
        let matriz2 = new Array(filaMatriz2);
        for (let i = 0; i < filaMatriz2; i++) {
            matriz2[i] = new Array(columnaMatriz2);
            for (let j = 0; j < columnaMatriz2; j++) {
                matriz2[i][j] = Math.floor(Math.random() * (vmax - (vmin) - 1) + (vmin));
                document.write(matriz2[i][j] + "  ");
            }
            document.write("<br>");
        }
        document.write("<br><br>");
        document.write("<h2>Matriz Resultado</h2>")
        let multiplicar = new Array(filaMatriz1);
        for (n = 0; n < multiplicar.length; n++) {
            multiplicar[n] = new Array(columnaMatriz2);
            for (y = 0; y < multiplicar[n].length; y++) {
                for (z = 0; z < columnaMatriz1; z++) {
                    multiplicar[n][y] = multiplicar[n][y] + matriz[n][z] * matriz2[z][y];
                    console.log(multiplicar[n][y]);
                }

            }

        }
    }
}