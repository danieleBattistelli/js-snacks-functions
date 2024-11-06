/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.

function saluta(nome){
    return `Ciao ${nome}`
}

const saluta2= (nome) => `Ciao ${nome}`

// Invoca la funzione qui e stampa il risultato in console

console.log(saluta(name))
console.log(saluta2(name))


//Risultato atteso se si passa 'Mario': // ciao Mario