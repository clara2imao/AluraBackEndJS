// encontrar um objeto
const clientes = require ("./cliente2.json")

function encontrar(lista, chave, valor){
    return lista.find (item => item[chave]== valor);
}

const encontrado = encontrar(clientes, "nome", "Kirby")
console.log(encontrado)