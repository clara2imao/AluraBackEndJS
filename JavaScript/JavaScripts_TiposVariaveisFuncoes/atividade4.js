let a =["1.Álcool", "2.Gasolina", "3.Diesel","4.Fim"]
let b;
let c;

function choice (b){
    if (b>(a.length)){
        console.log('Escreva um valor menor ou igual a quatro');
    } else if (b>=1 && b<=4 ){
        b=b-1;
        console.log(a[b])
    }else{
        console.log("Muito Obrigada!")
    }
    return;
}

choice(4);