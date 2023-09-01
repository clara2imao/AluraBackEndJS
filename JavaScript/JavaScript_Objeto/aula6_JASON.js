const dados = require("./cliente.json");
console.log(dados)
console.log(typeof dados)

// a partir de um objeto, vamos transformar em jason

const clienteEmString = JSON.stringify(dados)
console.log(clienteEmString)
console.log(typeof clienteEmString);

const objetoCliente =JSON.parse(clienteEmString)
console.log(objetoCliente)