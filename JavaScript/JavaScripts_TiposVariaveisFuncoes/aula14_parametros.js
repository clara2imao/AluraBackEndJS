// parâmetros de função

function soma(numero1,numero2){
    return numero1+numero2;

}
console.log(soma(2,2));
console.log(soma(-245,230));

//parametreos x argumentos
function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}

//console.log(nomeIdade(40, "Juliana"))

function multiplica(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplica(soma(4,5), soma(3,3)));

//Outros Exemplos
function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”