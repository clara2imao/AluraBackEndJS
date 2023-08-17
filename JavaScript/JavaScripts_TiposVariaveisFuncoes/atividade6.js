const n =6;
const vetorVazio = new Array(6);

for (let i = 0; i < vetorVazio.length; i++) {
    vetorVazio[i]=Math.round(Math.random()*10);
}
console.log(vetorVazio);

let maior = 0;
const media = vetorVazio.map((numero)=>{
    if (numero >= maior){
    maior = numero;
    } else{
        maior = maior;
    }
    return maior 
})
const posicao = vetorVazio.indexOf(maior)
console.log(`O menor valor é ${maior} e está na posição ${posicao+1}`);
