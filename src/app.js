/* eslint-disable */
import "bootstrap";
import "./style.css";

const deck = document.querySelector("#palo1");
const number = document.querySelector("#numero");
const deck2 = document.querySelector("#palo2");

let palos = ["♦", "♥", "♠", "♣"];
let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

const generatePalo = () => {
  let paloIndex = Math.floor(Math.random() * palos.length);
  return palos[paloIndex];
};

const generateNumber = () => {
  let numerosIndex = Math.floor(Math.random() * numeros.length);
  return numeros[numerosIndex];
};

window.onload = () => {
  //write your code here
  deck.innerHTML = generatePalo();
  deck2.innerHTML = deck.innerHTML;
  number.innerHTML = generateNumber();
};

let pickOneButton = document.querySelector("#start");
pickOneButton.addEventListener("click", function() {
  functionAleatoria();
});

// let numeroEnPantalla = numeros[Math.floor(Math.random() * numeros.length)];
// let mostrar = numeroEnPantalla;
// document.querySelector("#numero").innerHTML = mostrar;

/*function functionAleatoria() {
  let arrayVacio = [];
  for (let paletos = 0; paletos <= palos.length; paletos++) {
    for (
      let numerologo = 0;
      numerologo[palos].length <= numeros.length;
      numeros++
    ) {
      let combinacion = [paletos + numerologo];
      let mostrar = arrayVacio.push(combinacion);
      document.querySelector("#numero").innerHTML = numerologo;
      document.querySelector("#palo1").innerHTML = paletos;
    }
  }
}*/
function functionAleatoria() {
  let arrayVacio = [];
  for (let paletos of palos) {
    document.querySelector("#palo1").innerHTML = paletos;
    document.querySelector("#palo2").innerHTML = paletos;
    for (let numerologo of numeros) {
      let combinacion = [paletos + numerologo];
      let mostrar = arrayVacio.push(combinacion);
      document.querySelector("#numero").innerHTML = numerologo;
    }
  }
}
/* let buscarnumero = () => {
   let numeroEnPantalla = numeros[Math.floor(Math.random() * numeros.length)];
   let mostrar = numeroEnPantalla;
   document.querySelector("#numero").innerHTML = mostrar;
 }; */

// Como hago para que sea color rojo el diamante y corazon

// let palos = ["♦", "♥", "♠", "♣"];
// let numeros = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];

// let arrayVacio = [];
// for (paletos of palos){
//   for(numerologo of numeros){
//     let combinacion = [paletos + numerologo];
//     let prueba = arrayVacio.push(combinacion);
//      console.log(arrayVacio);

//     }
//   }

// let pickOneButton = document.querySelector("#start");
// pickOneButton.addEventListener("click", function() {
//   let numeroEnPantalla = numeros[Math.floor(Math.random() * numeros.length)];
//   let mostrar = numeroEnPantalla;
//   document.querySelector("#numero").innerHTML = mostrar;
// }); ///funciona!!!!!!!!!!!

let boton = document.querySelector("#eliminar");
boton.addEventListener(
  "click",
  function() {
    document.querySelector("#numero").innerHTML = "";
    document.querySelector("#palo1").innerHTML = "";
    document.querySelector("#palo2").innerHTML = "";
  },
  false
);
