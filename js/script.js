// 1 Chiedere chilometri da percorrere

// 2 Chiedere età passeggero

// 3 Calcolo spese del viaggio

// 4 Calcolo eventuale scontistica

// 5 Mostrare a schermo prezzo 

/* Condizioni di viaggio
 - 0,21 € al Km
 - Sconto 20% per minorenni
 - Sconto 40% over 65
 */


// ACCESSO ALLA RICHIESTA DEL BIGLIETTO 

alert('Benvenuto, clicca ok per procedere con il biglietto');

function myFunction(){

    // FASE 1 Richiesta Km da percorrere
    var percorso = parseInt(prompt('Quanti Km vuoi percorrere?'));
    console.log('Km da percorrere', percorso);

    // FASE 2 Richiesta età passeggero
    
    var age = parseInt(prompt('Età passeggero'));
    console.log('Età passegero', age);

    if (isNaN(percorso) || isNaN(age)){
        alert('Errore!! Dati non corretti');
    }


    if (age < 18){
        document.getElementById('sconto').innerHTML = "Hai diritto ad uno sconto del 20%";
    } else if (age > 65){
        document.getElementById('sconto').innerHTML = "Hai diritto ad uno sconto del 40%";
    } else {
        document.getElementById('sconto').innerHTML = "Spiacente, non hai diritto a sconti";
    }

    // FASE 3 Calcolo Costo Totale
    
    var costoTotale = 0.21 * percorso;
    console.log('Spesa totale', costoTotale);

    // FASE 4 e 5 Verifica e calcolo eventuale scontistica, con visualizzazione a schermo.
    
    
    if (age < 18) {
        console.log('Minorenne');
        var scontoMinorenne = costoTotale * ( 20 / 100);
        var prezzoScontatoMinorenne = costoTotale - scontoMinorenne;
        console.log('Il prezzo scontato è ', prezzoScontatoMinorenne.toFixed(2) );
        document.getElementById('prezzo').innerHTML = 'Il prezzo scontato è di: ' +  prezzoScontatoMinorenne.toFixed(2) + '€';
        document.getElementById('totale').innerHTML = 'Prezzo complessivo pari a: ' + costoTotale.toFixed(2) + '€';

    } else if (age > 65) {
        console.log('Over 65');
        var scontoOver65 = costoTotale.toFixed(2) * ( 40 / 100);
        var prezzoScontatoOver65 = costoTotale - scontoOver65;
        console.log('Il prezzo scontato è ', prezzoScontatoOver65.toFixed(2) );
        document.getElementById('prezzo').innerHTML = 'Il prezzo scontato è di ' + prezzoScontatoOver65.toFixed(2) + '€';
        document.getElementById('totale').innerHTML = 'Prezzo complessivo pari a: ' + costoTotale.toFixed(2) + '€';

    
    } else {
        console.log('Nessuno sconto', costoTotale.toFixed(2));
        document.getElementById('prezzo').innerHTML = ' Il totale da pagare è di: ' + costoTotale.toFixed(2) + '€';
    
    }

}







