// condizioni
// IF/ELSE - IF/ELSE IF/ELSE - SWITCH


// IF ELSE
// con una condizione
// let age = 18;

// if(age >= 18){console.log("PUOI GUIDARE")

// } else {console.log("NON PUOI GUIDARE")}

// con due condizioni

// let age1 = 18;
// let patente = true;
// if(age1 >= 18 && patente){console.log("PUOI GUIDARE")

// } else {console.log("Non puoi guidare perché sei troppo giovane")}


// IF/ELSE IF/ELSE

// let age1 = 18;
// let patente = false;
// if(age1 >= 18 && patente){console.log("PUOI GUIDARE")

// } else if(age1 >=18 && patente == false){
//     console.log( "Mi spiace hai l'età giusta ma devi prendere la patente");
    
// } else {console.log("Non puoi guidare perché sei troppo giovane")}



// let age1 = 18;
// let patente = false;
// let cash = 5000;


// if(age1 >= 18 && patente){
    
//     console.log("PUOI GUIDARE")
//     if( cash >=5000){
//         console.log("Puoi permetterti la PALIO");
//     }else{
//         console.log(vai a lavorare perché sei povero)};
        
//     } else if(age1 >=18 && patente == false){
//     console.log( "Mi spiace hai l'età giusta ma devi prendere la patente");
    
// } else {
//     console.log("Non puoi guidare perché sei troppo giovane")
// }

// SWITCH
// let color = "red"



// switch( color ){
//     case "red":
//         console.log("Il colore è rosso");
//     break;
//     case "blue":
//         console.log("Il colore è blue");
//     break;
//     case "orange":
//         console.log("Il colore è orange");
//     break;
//     case "yellow":
//         console.log("Il colore è yellow");  
//     break;
//     case "green":
//         console.log("Il colore è green");   
//     break;
//     default :
//         console.log("Il colore non esiste");}
        
        
// FOR

// for(let i = 0; i <= 10; i++){
//     console.log(i);
    

// }

// un utente tira 5 volte i dadi e riceve la somma finale dei suoi tiri

// let punteggio = 0;
// let tiri = 5;

// for(let i= 1; i <= tiri; i++){
//     let dado = Math.floor(Math.random() * (6 - 1 + 1) + 1);
//     punteggio = punteggio + dado;

//     console.log(`Al tiro di ${dado} è uscito ${dado} e il punteggio finale è di ${punteggio}`);
    
        
// }
        
// console.log(punteggio);

// WHILE

// let i = 1;

// while (i <= 10) {
//     console.log(i);
//         i++
// }

// let temperatura = prompt ("Quanti gradi ci sono nella stanza?")

// while (temperatura >= 25) {
//     console.log("Il condizionatore si sta attivando");
//     console.log(`La temperatura della stanza è ${temperatura}`);
//     temperatura--
    
    
// }
// console.log(`La temperatura della stanza è di ${temperatura}, il condizionatore è spento`);

// il prompt trasforma tutti i valori in stringa, se voglio che sia un numero devo scrivere in questo modo let temperatura = Number(prompt ("Quanti gradi ci sono nella stanza?")) 


// DO/WHILE

// let number = 1000;

// do {
//     console.log("ciao");
    
// } while (number < 0){

    
// }

let user_password;

let password = "Louvre"

do {
    user_password = prompt("Inserisci la password:");
    
} while ( user_password !== password){

    console.log("Benvenuto nel nostro sito");
    

}