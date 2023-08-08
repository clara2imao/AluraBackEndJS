// let item1 = [1,"Cachorro Quente", 4.00];
// let item2 = [2,"X-Salada", 4.50];
// let item3 = [3,"Xbacon", 5.00]
// let item4 = [3,"Torrada Simples", 2.00]
// let item5 = [4, "Refrigerante", 1.50]

// // pedido 3 e 5
// let total= item3[2]+ item5[2]
// const formato = total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
// console.log(` Total  ${formato}`);

let item1;
let item2;
let b=[4.00, 4.50, 5.00, 2.00, 1.50];
function preco (item1,item2){
    item1+1;
    item2+1;
    return b[item1]+b[item2];
}
const formato = preco(3,2).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
console.log(formato);