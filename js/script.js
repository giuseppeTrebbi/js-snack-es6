// Snack 1
const biciDaCorsa = ["Specialized Tarmac SL7", "Trek Émonda SLR 9", "Canyon Ultimate CFR", "Pinarello Dogma F", "Bianchi Oltre RC", "Cervélo R5", "Scott Addict RC Ultimate", "Colnago V4Rs", "Giant TCR Advanced SL", "Wilier 0 SLR", "Orbea Orca OMX", "Factor O2 VAM", "Look 795 Blade RS", "Ridley Helium SLX"];
const pesiBici = [6.8, 6.7, 6.5, 6.8, 6.9, 6.7, 6.6, 6.9, 6.6, 6.7, 6.8, 6.3, 7.0, 6.5];
const arrayBiciPesi = [];
let biciScelta = "";
let pesoMinore = 0;


for(let i = 0; i < biciDaCorsa.length; i++) {
    arrayBiciPesi.push({
        "nome": biciDaCorsa[i],
        "peso": pesiBici[i]
    });
};
for(let i = 0; i < arrayBiciPesi.length; i++) {
    if(i === 0) {
        pesoMinore = arrayBiciPesi[i]["peso"];
        biciScelta = arrayBiciPesi[i]["nome"];
    } else if(arrayBiciPesi[i]["peso"] < pesoMinore) {
        pesoMinore = arrayBiciPesi[i]["peso"];
        biciScelta = arrayBiciPesi[i]["nome"];
    };
};
console.log(`Bici più leggera: ${biciScelta}`);



// Snack 2
const arraySquadre = ["Atalanta", "Juventus", "Milan", "Inter", "Salernitana", "Napoli", "Roma", "Lazio", "Sampdoria", "Genoa", "Udinese", "Bologna", "Fiorentina", "Como", "Cremonese", "Verona", "Sassuolo"];
const arrayStatsSquadre = [];
const arraySquadreFalli = [];


for(let i = 0; i < arraySquadre.length; i++) {
    arrayStatsSquadre.push({
        "nome": arraySquadre[i],
        "punti fatti": 0,
        "falli subiti": 0
    });
};
// Inserisco numeri a caso
for(let i = 0; i < arrayStatsSquadre.length; i++) {
    arrayStatsSquadre[i]["punti fatti"] = Math.floor(Math.random() * 103);
    arrayStatsSquadre[i]["falli subiti"] = Math.floor(Math.random() * 1000);
};
// Creo l'ultimo array
for(let i = 0; i < arrayStatsSquadre.length; i++) {
    arraySquadreFalli.push({
        "nome": arrayStatsSquadre[i]["nome"],
        "falli subiti": arrayStatsSquadre[i]["falli subiti"]
    });
};
console.log('Squadre con punti e falli: ', arrayStatsSquadre);
console.log('Squadre con falli: ', arraySquadreFalli);


// Snack 3
function creaArray(array, a, b) {
    const nuovoArray = [];

    for(let i = 0; i < array.length; i++) {
        if (i >= a && i <= b) {
            nuovoArray.push(array[i]);
        };
    };
    return nuovoArray;
};
const tmpArray = [2, 4, 5, 78, 34, 56, 23, 65, 3, 67, 23, 36, 27, 56, 45, 1];
console.log(creaArray(tmpArray, 4, 10));



// Snack 4
const array1 = [1, 2, 3, 4, 5];
const array2 = ["a", "b", "c"];

function fondiArray(array1, array2) {
    const arrayFinale = [];

    for(let i = 0; i < array1.length || i < array2.length; i++) {
        if(i < array1.length) {
            arrayFinale.push(array1[i]);
        };
        if(i < array2.length) {
            arrayFinale.push(array2[i]);
        };
    };
    return arrayFinale;
};
console.log(fondiArray(array1, array2));









