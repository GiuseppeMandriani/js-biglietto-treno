// 1 Chiedere chilometri da percorrere

// 2 Chiedere età passeggero

// 3 Calcolo spese del viaggio

// 4 Calcolo eventuale scontistica

// 4 Mostrare a schermo prezzo 

/* Condizioni di viaggio
 - 0,21 € al Km
 - Sconto 20% per minorenni
 - Sconto 40% over 65
 */


// FASE 1

var percorso = prompt('Quanti Km vuoi percorrere?');
console.log('Km da percorrere', percorso);

// FASE 2

var age = prompt('Età passeggero');
console.log('Età passegero', age);

// FASE 3

var costoTotale = percorso * 0.21;
console.log('Spesa totale', costoTotale);

// FASE 4


if (age < 18) {
    console.log('Minorenne');
    var scontoMinorenne = costoTotale * ( 20 / 100);
    var prezzoScontatoMinorenne = costoTotale - scontoMinorenne;
    console.log('Il prezzo scontato è ', prezzoScontatoMinorenne);
} else if (age > 65) {
    console.log('Over 65');
    var scontoOver65 = costoTotale * ( 40 / 100);
    var prezzoScontatoOver65 = costoTotale - scontoOver65;
    console.log('Il prezzo scontato è ', prezzoScontatoOver65);
} else {
    console.log('Nessuno sconto', costoTotale)
}


