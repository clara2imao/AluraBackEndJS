// 0perador de comparação -> retorna verdadeiro ou falso 
// ele faz uma comparação em uma única linha 

// Somente libera se idade>=18
const idadeMinima =18;
const idadeCliente =19;

if (idadeCliente>=idadeMinima){
    console.log("cerveja")
}else{
    console.log("suco")
}

// Utilizar apenas para comparações simples pois dificulta a interpretação
//          //condição                  //true    //false
console.log(idadeCliente>= idadeMinima ? "cerveja":"suco")