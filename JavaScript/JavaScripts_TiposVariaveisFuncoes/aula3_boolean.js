// boolean - retorna true or false
const primeiroNumero = 5;
const segundoNumero = 5;
const cadastroAtivo = true;

console.log(primeiroNumero === segundoNumero); // tres iguais são comparacoes e retornam true ou false

const texto1 ="alura"
const texto2 = "Alura"

console.log(texto1=== texto2) //falso

// Boas Praticas
//camelCase: Inicia com letra minúscula e a primeira letra de cada palavra em seguida é escrita com letra maiúscula. Esta é a convenção utilizada pelo JavaScript para variáveis e funções.
//snake_case: Os espaços são substituídos pelo caractere _ (underline), com todas as palavras em letra minúscula. Por exemplo: minha_variavel ou senha_do_usuario.
//PascalCase: Similar ao CamelCase, porém neste caso todas as palavras começam com letra maiúscula. Por exemplo: MinhaVar ou SenhaDoCliente.

//NULL e UNDEFINED
let input = null;
if (input === null) {
 console.log('não há informação');
} else {
 console.log(input);
}

let input2;
console.log(input); // null
console.log(input2); // undefined

console.log(null == undefined); // true
console.log(null === undefined); // false
// == faz a conversão de tipo dos operandos antes da comparação, enquanto o operador === compara os valores, bem como os tipos de dados dos operandos.