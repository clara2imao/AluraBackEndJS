const notas = [10, 9.5, 8, 7, 6]

//modificar os itens do array adicionando um ponto
const notasAtualizadas = notas.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
    //ternário->n deixar as notas >10

});
console.log(notasAtualizadas);

//Reescrever arrays
const nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']
const nomesPadronizados = nomes.map((nome) => nome.toUpperCase());
console.log((nomesPadronizados));