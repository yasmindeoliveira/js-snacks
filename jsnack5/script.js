//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. Stampa l'array alla fine.

let arrayDispari = [];
let arreyPari = [];
for (let i = 0; i < 6; i++){
    let numero = prompt("Inserisca un numero:");
    numero = parseInt(numero);

    if (numero % 2 != 0){
        arrayDispari.push(numero);
        

    } else {
        arreyPari.push(numero);
        
    }
}

console.log("Numeri Dispari: " + arrayDispari);
console.log("Numeri Pari: " + arreyPari);