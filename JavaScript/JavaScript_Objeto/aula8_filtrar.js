const cliente =require ("./cliente2.json");

function filtrarApartamentoSemComplemento (clientes){
    return cliente.filter((cliente)=> {
        return(
            cliente.endereco.apartamento && 
            !cliente.endereco.hasOwnProprety("complemento")
        );
    });
}
const filtrados =filtrarApartamentoSemComplemento(cliente);
console.log(filtrados)