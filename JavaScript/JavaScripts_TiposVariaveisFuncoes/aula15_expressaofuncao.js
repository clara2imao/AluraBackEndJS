//declaração de função
function minhaFuncao(param){
    //bloco de código
}

minhaFuncao("param")

//expressão de função
const soma = function (num1,num2){return num1+num2}
console.log(soma(1,1))

//diferenças entre a declaração e a expressão de função
    //as funções na expresão são anônimas pois o nome é da constante, não da função
    //diferença principal
    console.log(apresentar())
    function apresentar(){
        return "olá";
    }
    // como é uma constante ela n pode ser chamada antes como no cófigo acima
    // devemos então listar as expressões de função em cima no código
    console.log(menos(1,1))
    const menos = function (num1,num2){return num1-num2}