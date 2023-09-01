const cliente ={
    nome: "Andre",
    idade: 32,
    cpf: "11122233344",
    email: "andre@dominio.com",
    telefone: ["1444444", "4555688888"],
    saldo: 200,
    efetuaPagamento: function (valor ){
        if (valor> this.saldo){
            console.log ("Saldo insuficiente ");
        }
        else {
            this.saldo -= valor;
            console.log (`Pagamento realizado. Novo saldo: ${this.saldo}`)
        }
    },

};
cliente.efetuaPagamento(250)
cliente.efetuaPagamento(100)
