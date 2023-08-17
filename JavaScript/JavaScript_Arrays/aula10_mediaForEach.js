let notas = [10, 6.5, 8, 7.5]
let somaDasNotas = 0;
// função callback -> que seu parametro é outra função
// o método do for each pode ser uma função-> então a função vai ser chamda para todos os valores de notas
notas.forEach(function (notas) {
    console.log(notas);
    somaDasNotas += notas;
});
const media = somaDasNotas / notas.length;
console.log(`A média das notas é ${media}`);



// Callbacks
const nomes = ["Clara", "Vini", "Gigi"]

nomes.forEach(function (Nomes) {
    console.log(nomes)
});

//Arrow function
nomes.forEach((nomes) => {
    console.log(nomes);

});
//OUTRA FORMA
function imprimeNome(nome) {
    console.log(nome);
}
nomes.forEach(imprimeNome)

// //REVISÃO
// forEach()-> para trabalhar com arrays da forma mais corriqueira - percorrendo do primeiro ao último elemento, sem alterar a condição de parada, e também para manter a coesão do estilo quando em conjunto com outros métodos de array como map, filter e etc;
// for…of-> em caso de iteráveis (dicionários, conjuntos e outras estruturas de dados) ou de arrays quando for necessário o uso de programação assíncrona e/ou dar condições de saída do laço (por exemplo, com o uso de break);
// for-> para casos em que seja necessário manipular de forma mais fina as fases do laço (condição inicial, condição de parada e incremento).