//L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

let numero1 = prompt("Inserisci un numero:");
let numero2 = prompt("Inserisci un'altro numero:");

numero1 = parseInt(numero1);
numero2 = parseInt(numero2);

if (numero1 > numero2){
    console.log("Il numero maggiore è: " + numero1);

}else if (numero2 > numero1){
    console.log("Il numero minore è: " + numero2);

}else console.log("Il primo numero è uguale al secondo numero");