//In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

let array = ["bryan", "emanuele", "monica", "diego", "veronica"];
let nome = prompt("Inserisca il suo nome completo:");
let flag = false;
nome = nome.toLowerCase();


for (let i = 0; i < array.length; i++){
    if (nome == array[i]){
        flag = true;
    }
    
};

if (flag){
    console.log("Benvenuto/a alla festa!");

} else console.log("Mi dispiace non sei incluso nell lista...");

