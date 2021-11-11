'use strict'

//El código JavaScript vendrá aquí.
//Creo un elemento  

/*let v=document.createElement("p");
v.textContent="Añadido dinámicamente"
document.body.appendChild(v);*/

/*let a=5;
a=5;
console.log(a);
const b=6;
console.log(b);
//b=7;


//Declaración de funciones
function miFuncion(nombre) {
    console.log("Te llamas "+ nombre);
}

miFuncion("Antonio David");

console.log(miFuncion("Antonio","David"));

console.log(miFuncion);

let g = miFuncion;
g("pepito");

let f = function (a,b) {
    return a*b;
}

console.log(f(2,5));

f=(a)=>a*a;
f=(a,b=1)=>a*b;

f = (a,b)=>{
    console.log("dentro de la funicón llamada");
    a+b;
}
console.log(f(2,3));


function valorConIva(base, iva) {
    return base+iva;
}

console.log(valorConIva(100,21));


let price = 65;

function edad(a) {
    if(a > 30){
        console.log("estás viejo");
    }else if(a > 50){
        console.log("retirate")
    }else{
        console.log("eres un chaval");
    }
}




let compara = (a,b) => {
    if (a>b) {
       return a;
    }
    return b
}

let f = (a,b) => a>b ? a : b;
console.log(f(f(9,4),1));

if(temperatura){
    console.log("Hace " + temperatura + " º");
}else{
    console.log("El agua se congela");
}
*/

/*let dia=44;

switch(dia){
    case 1:
        console.log("Lunes");
        break;
    case 2:
        console.log("Martes");
        break;
    case 3:
       console.log("Miercoles");
       break;
    case 4:
        console.log("Jueves");
        break;
    case 5:
        console.log("Viernes");
        break;
    case 6:
        console.log("Sabado");
        break;
    case 7:
        console.log("Domingo");
        break;  
    default:
        console.log("No es const element = array[index]un dia válido");
        break;    
}*/


/*let value=10;

while (value >= 0) {
    console.log(value--);
}

value=10;
do{
    console.log(value--);
}while(value >=0)

//while(a) console.log(--a);*/

/*let z=0;
for (let i = 1 ; i <= 10 ; i++) {
    for (let j = 1; j <= 10 ; j++) {
        z++;
        console.log(z);
    }
}

document.write("<pre>HOLA</pre>");*/

/*let fila=10;
let col=10;

document.write("<pre>");
for (let i = 0; i <= fila; i++) {
    for(let j = 0; j <=col; j++){
        if (j==0|| i==0 || i== fila|| j==fila ) {
            document.write("#");
        }else{
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write("</pre>");*/

/*let fila=10;
let col=10;

document.write("<pre>");
for (let i = 0; i <= fila; i++) {
    for(let j = 0; j < 20; j++){
        if(j>=(10-i)&&j<=(10+i)){
        document.write("#");
        }else{
            document.write(" ");
        }
    }
    document.write("<br>");
}

for (let i = 9; i >= 0 ; i--){
    document.write(" ");
    for (let j = 19; j >=0; j--) {
        if(j>=(10-i)&&j<=(10+i)){
            document.write("#");
            }else{
                document.write(" ");
            }
    }
    document.write("<br>");
}



document.write("</pre>");*/



/*fila=10;
col=10;

document.write("<pre>");
for (let i = 0; i <= fila; i++) {
    for(let j = 0; j <=i; j++){
        document.write("#");
    }
    document.write("<br>");
}
document.write("</pre>");*/






/*console.log(Number.MIN_VALUE); // Imprime 5e-324 (El número más pequeño)
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE); // Imprime 1.7976931348623157e+308 (El número más grande)
console.log(Number.MAX_SAFE_INTEGER); */


/*let a =1;
console.log(a++);
console.log(a);
console.log(++a);*/


/*let a = 5;
let b = 9;
console.log("Operacion de bits: " + (a<<1));  

a=-1759390230;

for (let i = 0; i <= 32; i++) {
    console.log(a>>>=1);
}*/


/*let cadena = "ahola caracola";
console.log(cadena.indexOf("a"));
console.log(cadena.lastIndexOf("z"));
for (let i = 0; i < cadena.length; i++) {
    console.log(cadena.charAt(i));
}

let expR = cadena.match(/a/g);

for (let i = 0; i < expR.length; i++) {
    console.log(expR[i]);    
}

console.log(cadena.replace(/a/g,"i"));
console.log(cadena);
console.log(cadena.slice(8,10));
console.log(cadena);*/

/*let a = new Array(10);
let vmin=50;
let vmax=70;

for (let i = 0; i < a.length; i++) {
    a[i]=Math.floor(Math.random()*(vmax-vmin-1)+vmin); //como sacar un numero aleatorio
    console.log(a[i]);
}

console.log("ZZZZZ");

for(let i in a){
    console.log(i);//solo muestra la posicion. Para mostrar valor a[i]
}


console.log("ZZZZZ");

for(let i of a ){
    console.log(i);
}*/

let a = new Array();
let vmin=50;
let vmax=70;

for (let i = 0; i < a.length; i++) {
    a[i]=Math.floor(Math.random()*(vmax-vmin-1)+vmin); //como sacar un numero aleatorio
    console.log(a[i]);
}
console.log("ZZZZZ");

let mayor=0;
for(let i of a ){
    if (i>mayor) {
        mayor=i
    }
}

console.log(mayor);

/*let salir=true;
let array = [];
let dup=0;
do {
    let numero = prompt("Introduce un numero: ");
    
    if (array.length==0) {
        array=numero;
    }else{
        for (let i = 0; i <= array.length; i++) {
            if (numero>array[i]) {
                array[i+1]=numero;
            }
        }
    }
 
    let salida = prompt("¿Quieres salir?")
    if (salida=="si") {
        salir = false;
    }
} while (salir!=false);

for(let i of array ){
    console.log(i);
}*/