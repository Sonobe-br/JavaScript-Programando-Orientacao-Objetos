class Cliente {
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = 'Daniel';
cliente1.cpf = 276869748-63;
cliente1.rg = 29024161-3;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = 'Alice';
cliente2.cpf = 215696970-81;
cliente2.agencia = 1001;
cliente2.saldo = 0;

//console.log(cliente1, cliente2);
console.log(cliente1);
console.log(cliente2);