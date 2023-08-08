const texto1 = "Olá mundo!";
const texto2 = "Olá mundo!";
const senha ="supersenha123";
const StringDeNumeros ="3456";

// Aspas simples e aspas duplas
const citaco = ' Meu nome é ';
const meuNome = "Clara";

//concatenação(+) -- nas strings
console.log(citaco + meuNome)

//template string ou template literal

//codificaçao de stings
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// JS é case sensite
const cidade = "belo horizonte";
const input = "Belo Horizonte";

console.log(cidade === input); // false

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

// contagem de caracteres
console.log(senha.length) // 13 caracteres
