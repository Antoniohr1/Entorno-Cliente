/*'use strict'
//Creo un elemento
let a= 5;
a=5;
console.log(a);
const b =6;
console.log(b);

//Declaración de función
function miFuncion(nombre) {
    console.log("Te llamas "+ nombre);

}
    miFuncion("Antonio")
    console.log(miFuncion("Antonio"));
//Declaración función anónima
let f = function (a,b) {
    return a*b;
}
console.log(f(2,3));

let t = (a,b)=> a+b;
console.log(t(5,4));

//Un pequeño ejemplo 

function tuEdad(edad) {
    if(edad > 30 ){
       return console.log("Eres mayor");
    }else{
     return console.log("Eres joven");
    }
}
console.log(tuEdad(40));*/
/*
let compMayor =(a,b) =>{
    
    if (a>b){
   return a;
}else {
    return b;
}
}
console.log(compMayor(compMayor(25,16),1));
let dia =5;
switch(dia){
    case 1:
        console.log("Lunes");
        break;
        case 2:
        console.log("Martes");
        break;
        case 3:
        console.log("Miércoles");
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
            console.log("No es un día válido");
            break;
}
*/
/*let inicio =10;

while (inicio>=0) {
    console.log(inicio--);
    
}
inicio=10;
 do{
    console.log(inicio--);
    
}while (inicio>=0)*/

/*for (let i=0 , j=10; i!=j; i++,j++){

}*/

/*for(let i=1 ;i<=10;i++){
    for(let j=1;j<=10; j++){
        z++;
    }
}*/

/*let fila =10;
let columna=10;
document.write("<pre>")
for(let i=1;i<=fila;i++){
    for(let j=1;j<=columna;j++){
           
       if(i==0 || j== 0 || i==fila || j==fila){
           document.write("#");
       } else{
           document.write(" ")
       }   
    }
    document.write("<br>")
}*/

/*let fila =10;
let col = 10;
document.write("<pre");
for(let i = 0 ; i<=fila; i++){
    for(let j = 0;j< 20 ; j++){
        if(j>=(10 -i)&&j<=(10+i)){
            document.write("#");
        }else{
            document.write(" ");
        }

    }
    document.write("<br>");
}
for(let i = 9; i>=0; i--){
    document.write(" ");
    for(let j =19; j>=0;j--){
        if(j>=(10 - i)&& j<=(10+i)){
            document.write("#");

        }else{
            document.write(" ");
        }
    }
    document.write("<br>");
}
document.write("</pre>")

console.log(Number.MIN_VALUE); // Imprime 5e-324 (El número más pequeño)
console.log(Number.MAX_VALUE);  ; // Imprime 1.7976931348623157e+308 (El número más grande)
console.log
console.log(Number.MAX_VALUE * 2); // Imprime Infnity
console.log(Number.POSITIVE_INFINITY); // Imprime Infnity
console.log(Number.NEGATIVE_INFINITY); // Imprime -Infnity
console.log(typeof Number.POSITIVE_INFINITY); // Imprime number*/
/*let a=5;
let b=-1;
console.log(a &b);*/

//Math.floor(Math.random()*(vmasc-vmin +1)+ vmin)


/*let array = new Array(20);
let vmin = 10;
let vmax = 50;
for (let i = 1; i < array.length; i++) {
    array[i] = Math.floor(Math.random() * (vmax - vmin - 1) + vmin);
    console.log(array[i]);
}
console.log("separacion")
let mayor = 0;

for (let i of array) {
    if (i > mayor) {
        mayor = i;
    }

}
console.log(mayor);*/