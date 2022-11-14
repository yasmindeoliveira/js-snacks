//Fate generare un numero random da 0 a 10 al computer, e chiedete all'utente di inserire un suo numero. Se il numero scelto dall'utente è uguale al numero del computer informate l'utente che ha vinto, altrimenti a perso.

let numeroUtente = prompt("Inserisca un numero:");
let numeroComputer = Math.floor(Math.random() * (10 - 1 + 1) + 1);

console.log(numeroUtente);
console.log(numeroComputer);

if (numeroUtente == numeroComputer){
    console.log("Hai vinto!");

} else console.log("Mi dispiace, hai perso");