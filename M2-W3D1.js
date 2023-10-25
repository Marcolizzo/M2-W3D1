/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 1")
const crazySum = function (x, y) {
    if (x === y) {
        return (x + y) * 3
    } else {
        return (x + y)
    }
}
console.log(crazySum(5, 5))
console.log("")

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 2")
const boundary = function (x) {
    if (((x >= 20) && (x <= 100)) || (x === 400)) {
        return true         //se x è compreso tra 20 e 100 oppure è ugulae a 400, ritorno il valore true
    } else {
        return false
    }
}
console.log(boundary(400))
console.log("")

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 3")
const reverseString = function (stringa) {
    /* divido la stringa in un array di lettere con ".split(""), poi inverto l'ordine delle lettere
    con ".reverse" ed infine ritorno l'array di lettere di nuovo come stringa con ".join" */
    return stringa.split("").reverse().join("");
}
console.log(reverseString("EPICODE"))
console.log("")

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 4")
const upperFirst = function (stringa) {
    //converto la stringa in caratteri minuscoli e la divido in un array di parole mettendo uno spazio nel parametro di .split
    let splitStringa = stringa.toLowerCase().split(" ");
    for (let i = 0; i < splitStringa.length; i++) {
        /*Creo un loop che ad ogni parola trasforma il primo carattere (".charAt(0)") 
        in maiuscolo con ".toUpperCase" e aggiungo il resto della stringa/parola con ".substring(1)"
        che ritorna tutti i caratteri a partire dalla seconda posizione (1) */
        splitStringa[i] = splitStringa[i].charAt(0).toUpperCase() + splitStringa[i].substring(1)
    }
    //ritorno l'array come stringa sempre usando lo spazio come separatore
    return splitStringa.join(" ")
}
console.log(upperFirst("ciao sono marco"))
console.log("")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("Esercizio 5")
const giveMeRandom = function (n) {
    const numeri = []
    for (let i = 0; i < n; i++) {
        numeri.push(Math.round(Math.random() * 11))
    }
    return numeri
}
let numeri = giveMeRandom(4)
console.log(numeri)
console.log("")

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
