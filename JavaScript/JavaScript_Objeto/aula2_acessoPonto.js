const cliente ={
    nome: "Andre",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com",


};

//console.log(cliente);
cliente.endereco ={
    rua: " R. araujo santos",
    numero: 3887,
    apartament: true,
    complemento: "ap 345",
};

//console.log(cliente.endereco)

//outra forma -> lista
cliente.enderecos =
[{
    rua: " R. araujo santos",
    numero: 3887,
    apartament: true,
    complemento: "ap 345",
}];

cliente.enderecos.push({
    rua: "Rua josephf ladder",
    numero: 404,
    apartament: false,
})
//console.log(cliente.enderecos)

//filtro
const listApneasApartamentos =cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
)
console.log(listApneasApartamentos)