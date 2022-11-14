//Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti a perso.
let numeroMin = prompt("Inserisca un numero minimo:");
let numeroMax = prompt("Inserisca un numero massimo:");
numeroMin = parseInt(numeroMin);
numeroMax = parseInt(numeroMax);

let numeroUtente = prompt("Inserisca un numero:");
let numeroComputer = Math.floor(Math.random() * (numeroMax - numeroMin + 1) + numeroMin);

console.log(numeroUtente);
console.log(numeroComputer);

if (numeroUtente == numeroComputer){
    console.log("Hai vinto!");

} else console.log("Mi dispiace, hai perso");