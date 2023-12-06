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
let arrey_pesi=[]

modelliBici.forEach((elem) => {
    //estrapolo tutti i valori peso e li immetto 
    arrey_pesi.push(parseInt(elem.peso))
})
//metto in ordine crescente gli elementi all interno del arrey
arrey_pesi.sort()
console.log(arrey_pesi)
modelliBici.forEach((elem) => {
    if(elem.peso == arrey_pesi[0]){
        console.log(elem)
    }
})
