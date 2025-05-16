console.log('PERSONE')


/*
Esercizio 4 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età.
Partendo da questo, crea quindi un nuovo array inserendo, per ogni persona, una frase (stringa) con il nome e cognome e l'indicazione se può
guidare, in base all'età.
*/


const persone = [ 
    { nome: 'Francesco', cognome: 'Turco', eta: '29'},
    { nome: 'Paolo', cognome: 'Rossi', eta: '75'},
    { nome: 'Michele', cognome: 'Bianchi', eta: '14'},
    { nome: 'Riccardo', cognome: 'Scamarcio', eta: '11'},
    { nome: 'Lorenzo', cognome: 'Maiorano', eta: '34'},
    { nome: 'Lino', cognome: 'Banfi', eta: '69'},
]

console.log (persone);


//utilizzo ciclo for per eseguire la frase può guidare in base all'età

const maggiorenne = [];

for (let i = 0; i < persone.length; i++) {
    const persona = persone[i]; // ciclo singolo oggetto
    let puoGuidare = `${persona.nome} ${persona.cognome}`; // uso una variabile let con conseguente ciclo for per definire Nome e Cognome della persona 


    if (persona.eta >= 18) {            //SE entrando nell'età della singola persona verifico che abbia 18 anni o + di 18
        puoGuidare += ' può guidare.';   //ALLORA concateno la stringa precedente quindi "nome" + "cognome" con la stringa "può guidare"
    }
    else {
        puoGuidare += ' non può guidare.'; //ALTRIMENTI la persona minore di 18 anni "non può guidare"
    }

    maggiorenne.push(puoGuidare);


}


console.log(maggiorenne)


