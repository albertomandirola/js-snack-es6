//snack 1
//creazione della lista di bici
const modelliBici =[
    {
        name : 'Alchemy Atlas',
        peso : 980
    },
    {
        name : 'Arc8 Escapee DB',
        peso : 800
    },
    {
        name : 'Argon18 Gallium Pro Disc',
        peso : 794
    },
    {
        name : 'Aurum Magma',
        peso : 805
    },
    {
        name : 'Basso Diamante',
        peso : 760
    },  
]
//arrey di confronto per i pesi
let array_pesi=[]

modelliBici.forEach((elem) => {
    //estrapolo tutti i valori peso e li immetto 
    array_pesi.push(parseInt(elem.peso))
})
//metto in ordine crescente gli elementi all interno del arrey
array_pesi.sort()
console.log(array_pesi)
modelliBici.forEach((elem) => {
    if(elem.peso == array_pesi[0]){
        console.log(elem)
    }
})



//snack 2

const squadreCalcio =[
    {
        name : 'juventus',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'inter',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'napoli',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'milan',
        puntiFatti : 0,
        falliSubiti : 0
    },
    {
        name : 'fiorentina',
        puntiFatti : 0,
        falliSubiti : 0
    },  
]
console.log(squadreCalcio)

squadreCalcio.forEach((elem) => {
    elem.puntiFatti = Math.floor(Math.random()*50 + 1)
    elem.falliSubiti = Math.floor(Math.random()*10 + 1)
})

const nomiSquadreFalli = squadreCalcio.map(({name,falliSubiti}) =>({name,falliSubiti}))

console.log(nomiSquadreFalli)
