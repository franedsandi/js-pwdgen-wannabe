//Fare un  (insicurissimo) password generator in base al nome, cognome e colore preferito + 23 

//1. Salvare in 4 variabili nel prompt dell'inserimento del nome, cognome, colore preferito e il numero

//2. Creare la stringa di output

//3. effettuare l'innerHTML dell'output nel tag designato

// 1.
const name = prompt('Inserire il nome');
const lastname = prompt('Inserire il cognome');
const colore = prompt('Inserire il colore preferito');
const number = '23';

//2.
const message = 'Ciao ' + name + ' ' + lastname + '. <br> La tua (insicurissima) password e: <br>"'+ name + lastname + colore + number + '" ' ;

//3. 
document.getElementById('output').innerHTML = message;
console.log(message);