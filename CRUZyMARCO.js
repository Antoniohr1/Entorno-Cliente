document.write("<pre>")
    //Introducimos los datos de las filas y las columnas, los casteamos a int
fila = parseInt(prompt("Introduce las Filas"))
colum = parseInt(prompt("Introduce las Columnas"))
    //----------------------------------------------------------------------
    //Obtenemos el tercio de las columnas y de las filas. Que utilizaremos en los bucles
let tercioColum = Math.trunc(colum / 3);
let tercioFila = Math.trunc(fila / 3);
//-----------------------------------------------------------------------
document.write("Cruz")
document.write("<br>")
    //Generamos un cuadrado de asteriscos
for (let i = 0; i <= fila; i++) {
    for (let j = 0; j <= colum; j++) {
        //------------------------------------------------------------------------
        //Las posiciones de las filas que sean mayores al tercio de fila y menores a las posiciones de fila menos el tercio de filas
        //Por ejemplo fila vale 20 y su tercio es 6, ya que lo trunco. Las posiciones entre 6 y 14 ponemos un ".", o el mismo caso con las columnas
        //En este caso se tienen que cumplir una de las condiciones
        if (i > tercioFila && i < fila - tercioFila || j > tercioColum && j < colum - tercioColum) {
            document.write(".")
        } else {
            document.write("#")
        }
    }
    document.write("<br>")
}

document.write("<br>")



document.write("Marco")
document.write("<br>")
    //Generamos un cuadrado de asteriscos
for (let i = 0; i <= fila; i++) {
    for (let j = 0; j <= colum; j++) {
        //------------------------------------------------------------------------
        //Las posiciones de las filas que sean mayores al tercio de fila y menores a las posiciones de fila menos el tercio de filas
        //Por ejemplo fila vale 20 y su tercio es 6, ya que lo trunco. Las posiciones entre 6 y 14 ponemos un ".", y el mismo caso con las columnas
        //En este caso se tienen que cumplir las dos condiciones
        if (i > tercioFila && i < fila - tercioFila && j > tercioColum && j < colum - tercioColum) {
            document.write(".")
                //------------------------------------------------------------------------
                //Las posiciones de las filas que sean mayores al tercio de fila y menores a las posiciones de fila menos el tercio de filas
                //Por ejemplo fila vale 20 y su tercio es 6, ya que lo trunco. Las posiciones entre 6 y 14 ponemos un "#", y el mismo caso con las columnas
                //En el caso contrario pone "#"
        } else if (i > tercioFila && i < fila - tercioFila) {
            document.write("#")
        } else {
            document.write("#")
        }
    }
    document.write("<br>")
}