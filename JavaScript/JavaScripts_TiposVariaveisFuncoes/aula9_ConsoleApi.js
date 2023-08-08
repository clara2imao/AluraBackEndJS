//Console -> colocar frases ou dados para fora da aplicação
//Log-> criando um registro no console, número string, variáveis
const minhaVar = true;

console.log(245);
console.log ("eu sou um texto");
console.log (minhaVar);

// tratamento de erro -> console.erro()-> colocar um erro predefinido
console.error('deu erro!');

// Outros métodos
//console.error() para exibir mensagens de erro;
//console.table() para visualizar de forma mais organizada informações tabulares;
//console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

//Diferenças
console.log("deu erro");
console.error(new Error("deu erro"));
console.error('deu erro');
