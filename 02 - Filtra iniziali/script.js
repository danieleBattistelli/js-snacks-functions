/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */




// Dichiara la funzione qui.


/**
 * funzione che accetti un'array di stringhe e una lettera e 
 * restituisca un array contenente solo le parole che iniziano con quella lettera
 *
 * @param {string} names
 * @param {string} letter
 * @returns
 */
function findNamesByLetter(names , letter){
    let risultato = [];
    for (let i =0 ; i < names.length; i++){
        if(names[i].startsWith(letter)) {
            risultato.push(names[i]);
        }
    }
    return risultato;
}

const filtraParoleIniziali = (array, lettera) => array.filter(parola => parola.startsWith(lettera));

// Invoca la funzione qui e stampa il risultato in console
const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A";

console.log(findNamesByLetter(names, letter))
console.log(filtraParoleIniziali(names, letter))


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]