'use strict'
console.log(window.outerWidth + " - " + window.outerHeight);
//window.open("ji ji ja ja");
console.log(window.screen.width + " - " + window.screen.height); // Ancho de pantalla y alto (Resolución)
console.log(window.screen.availWidth + " - " + window.screen.availHeight); // Excluyendo la barra del S.O
console.log(window.navigator.userAgent); // Imprime la información del navegador
/*window.navigator.geolocation.getCurrentPosition(function(position) { 
    console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
});*/


/*setTimeout(() =>{
    document.write("Se ha ejecutado el timer 1");
},3000);

let temporizador = setTimeout(() =>{
    document.write("Se ha ejecutado el timer2");
},5000);

clearTimeout(temporizador);



document.write("Hola");*/

/*let tiempo=0;

function f(){
    tiempo++;
    document.writeln("Han pasado " + tiempo + " segundos");
    if(tiempo<10){
        setTimeout(f,1000);
    }
}

setTimeout(f,1000); 

let a = 0;
let intervalo = setInterval(() => {
    a++;
    console.log("Soy el intervalo " + a);
    if(a===20)
    clearInterval(intervalo);
}, 1000);

function multiplicar(a,b){
    console.log(a*b);
}

setTimeout(multiplicar,3000,5,9);

let variable = confirm("A ver que botón aprietas");
console.log(variable);*/

/*let elemento = document.getElementById("1");

console.log(elemento);
console.log(elemento.innerText);
elemento.innerText = "Lo he cambiado";*/

/*let parrafos = document.getElementsByTagName("p");
for (let i = 0; i < parrafos.length; i++) {
    console.log(parrafos[i]);
}
let elemento = document.getElementsByTagName("p");
for (let i = 0; i <= elemento.length; i++) {
    console.log(elemento[i].innerText);
}
elemento = [...elemento];
elemento.forEach(item => { console.log(item.innerText) });
//[...document.getElementsByTagName("p")].forEach(element=>{console.log(element.innerText)});
let div = document.querySelector("div:nth-of-type(3n");
[...div.children].forEach(item => { console.log(item.innerText) });*/

/*let nuevoElemento = document.createElement("li");
nuevoElemento.innerText = "Nuevo li";
//FORMA 1
let padre = document.getElementsByTagName("ul");
padre[0].appendChild(nuevoElemento);

//FORMA 2 
let padre = document.querySelector("ul");
padre.appendChild(nuevoElemento);

//FORMA 3
let padre = document.querySelectorAll("ul");
padre[0].appendChild(nuevoElemento);

//FORMA 4
padre = document.body.children[0];
padre.appendChild(nuevoElemento);

let hermano = document.querySelector("li:nth-of-type(3n");
padre.insertBefore(nuevoElemento, hermano);*/


let boton = document.getElementById("boton1");
let elemento = document.getElementById("textarea");

boton.addEventListener("click", function(evento) {
    // alert("Has pulsado el elemento " + this.id + " y se ha disparado el evento: " + evento.type);
    alert("El contenido del textarea " + elemento.value);
});
/*boton.onclick = () => {

        //Codigo
        alert("El contenido del textarea " + elemento.value);
    }*/
let checkbox = document.getElementById("cambio");
checkbox.addEventListener("click", function(event) {
    let elemento1 = document.getElementById("textarea");
    if (this.checked) {
        elemento1.type = "text";
    } else {
        elemento1.type = "password";
    }
})