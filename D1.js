/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/
/* 
*/   

/* SCRIVI QUI LA TUA RISPOSTA */

String = Si usa per le parole e i testi e si scrive aggiungendo ai lati le virgolette "" o '' -->;
   - Number = Si usa per i numeri,non serve nessuna virgoletta ;
   - Boolean = Si esa per dichiarare che una affermazione sia vera o falsa, si possono usare diversi caratteri per indicare cose diverse:
             == --> due valori siano dello stesso tipo,
            === --> indicano se è vero o falso sia il tipo che il valore
             && --> si legge "And" e si usa quando vogliamo sapere se c'è almeno un valore negativo,
             || --> si legge "Or" e si usa quando vogliamo sapere se c'è almeno un valore positivo,
              ! --> si legge "Not" e si usa per avere il risultato opposto

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Dino";
console.log (name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 12;
let num2 = 20;
console.log (num1 , num2);

let num3 = num1 + num2;
console.log (num3);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12; 
console.log (x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

name = "Di Diodoro";
console.log (name);



const surname = "Di Diodoro";
console.log (surname);
surname = Dino;
console.log (surname);
/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let y = 4;
let z = x - y;
console.log (z);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
console.log (name1 , name2);

console.log (name1 === name2);