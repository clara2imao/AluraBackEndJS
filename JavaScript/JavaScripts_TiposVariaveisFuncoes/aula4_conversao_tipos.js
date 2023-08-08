// tipo de dado
//boleanos -> evitar o comportamento de conversao

// conversão implícita-> converter um tipo de dado em outro
const numero=1;
const numeoroString="1";

console.log(numero===numeoroString)// false-> mostra que o numero é diferente de texto
console.log(numero==numeoroString)// true -> COMPARAÇÃO IMPLÍCITA -> compara o valor e o TIPO

console.log(numero+numeoroString)// 11 -> transforma o numero em uma string, então o porador de soma se torna uma concatenação


// conversão explícita
    //Number() -> transformar a string em número
    console.log(numero+Number(numeoroString))

    //String() -> transforma o número em string
    console.log(String(numero)+numeoroString)

    var respostaDeTudo = 42
    let idade = 29
    const pi = 3.14

    {
        var respostaDeTudo = 3.14
        let idade = 42
        const pi = 29
        console.log(respostaDeTudo, idade, pi)
    
    }
    
    console.log(respostaDeTudo, idade, pi)