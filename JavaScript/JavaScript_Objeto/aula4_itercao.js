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

for (let chave in cliente){
    let tipo =typeof cliente [chave]
    if (tipo !== "object" && tipo !== "function"){
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
    }

}

