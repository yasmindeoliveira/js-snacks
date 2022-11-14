//Il software deve chiedere per 10 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

let array = [];
let somma = 0;
let numeroMaggiore = 0;
let numroMinore;



for (let i = 0; i < 10; i++){
    let numero = prompt("Scrivi un numero");
    numero = parseInt(numero);
    array.push(numero);
    somma = somma + numero;

    /* if (numero > numeroMaggiore){
        numeroMaggiore = numero
    }; */

};

console.log(array);
console.log(somma);

console.log(Math.max(...array));
console.log(Math.min(...array));

let media = somma / array.length;
console.log(media);