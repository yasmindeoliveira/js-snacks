//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let listaNomi = ["bryan", "emanuele", "monica", "diego", "veronica"]; /* let arrey */
let nome = prompt("Inserisca il suo nome:");
let nomePresente = false; /* let flag */
nome = nome.toLowerCase();


for (let i = 0; i < listaNomi.length; i++){
    if (nome == listaNomi[i]){
        nomePresente = true;
        break;
    }
    
};

if (nomePresente){
    console.log("Benvenuto/a alla festa!");

} else console.log("Mi dispiace non sei incluso nell lista...");

