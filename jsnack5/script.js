//Crea un array vuoto. Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array. Stampa l'array alla fine.

let array = [];

for (let i = 0; i < 6; i++){
    let numero = prompt("Inserisca un numero:");
    numero = parseInt(numero);

    if (numero % 2 != 0){
        array.push(numero);
        console.log(array);
    }
}