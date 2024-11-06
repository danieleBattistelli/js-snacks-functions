/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */




// Dichiara la funzione qui.

// Definiamo le vocali in un array
const vocali = ['a','e', 'i', 'o', 'u'];
function contaVocali(word){
let count = 0;
let elencoVocali = [];

// Iteriamo attraverso ogni carattere della stringa
for ( let i =0; i<word.length; i++ ){
    if(vocali.includes(word[i])){
        
        count ++
        elencoVocali.push(word[i].toLowerCase());
    }
}
return `${word}: ${count} (${elencoVocali.join(', ')})`;
}


const contaVocali2 = word => { 
    const vocali = ['a', 'e', 'i', 'o', 'u']; 
    const vocaliTrovate = word.split('').filter(char => vocali.includes(char)).map(char => char.toLowerCase()); 
    const count = vocaliTrovate.length; 
    return `${word}: ${count} (${vocaliTrovate.join(', ')})`; };

// Invoca la funzione qui e stampa il risultato in console
const word = 'javascript';
console.log(contaVocali(word))
console.log(contaVocali2(word))


//Risultato atteso se si passa 'javascript': 3 (a, a, i)