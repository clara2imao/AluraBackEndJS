const nomes = ["Ana", "Clara", "Maria", "João", "Maria", "João", "João",]
const meuSet = new Set(nomes);

const nomesAtualizados = [...meuSet];
// sem precisar declarar podemos escrever só const nomesAtualizados = [...new Set(nomes)];
console.log(nomesAtualizados);

