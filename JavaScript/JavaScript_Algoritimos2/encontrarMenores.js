//Quick Sort

const listaLivros = require ('./arrays2')

function encontrarMenores(pivo, array){
    let menores =0;

// pega o pivo compara com os elementos e marca qual posição ele deve estar
    for (let atual =0; atual< array.length; atual++){
        let produtoAtual = array[atual]
        if (produtoAtual.preco <pivo.preco){
            menores ++
        }
    }
                    // local onde está o pivo
    trocaLugar(array, array.indexOf(pivo), menores)
    return array
}

//troca os elementos de lugar, de onde ele veio para onde ele vai
function trocaLugar(array, de, para){
    const elem1 = array[de]
    const elem2 = array [para]

    array[para]= elem1
    array[de]=elem2

}

function divideNoPivo (array){
    let pivo = Math.floor(array.length/2)
    encontrarMenores(pivo,array)
    let valoresMenores =0
    return array;
}
console.log(encontrarMenores(listaLivros[2],listaLivros));