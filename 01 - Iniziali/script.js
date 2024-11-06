/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali 
di ogni parola dell'array fornito */



// Dichiara la funzione qui.

/**
 * Funzione che accetta un array di nomi in ingresso 
 * e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito 
 * 
 *
 * @param {string} names
 * @returns {string} initialArray
 */
function InitialOfName(names){
     let initialArray = [];
     for (let i =0 ; i < names.length; i++){
        initialArray.push(names[i][0]);
     }
     return initialArray;

}

/**
 * Funzione che accetta un array di nomi in ingresso
 * e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito
 * @param {Array string} names
 * @returns {Array string} initialArray
 */
let initials =[]
const getInitials = (initials) => initials.map(name => name[0]);

// Invoca la funzione qui e stampa il risultato in console


const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(InitialOfName(names))
console.log(getInitials(names)) //=> deve essere usata dopo la definizione!!!

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]


