class Cliente {
    primeiroNome;
    sobrenome;
    cpf;
    rg;
    endereçoResidencial;   
}

class ContaCorrente {
    agencia;
    tipoDeConta;
    saldo;

    sacar(valor){
        if(this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    }

    depositar(valor){
        if(valor <= 0) 
        {
        return;
        }
        this.saldo += valor;  
    }
} 

const cliente1 = new Cliente();
cliente1.primeiroNome = 'Daniel';
cliente1.sobrenome = 'Sonobe Silveira';
cliente1.cpf = 276869748-63;
cliente1.rg = 29024161-3;
cliente1.endereçoResidencial = 'Rua das Ostras, 69';

const contaCorrenteDaniel = new ContaCorrente();
contaCorrenteDaniel.saldo = 0;
contaCorrenteDaniel.agencia = 1001;
contaCorrenteDaniel.tipoDeConta = 'Conta Corrente';


const cliente2 = new Cliente();
cliente2.primeiroNome = 'Alice';
cliente2.sobrenome = 'Heineken';
cliente2.cpf = 215696970-81;
cliente2.rg = 24025272-4;
cliente2.endereçoResidencial = 'Avenida Beira Mar, 69';

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.saldo = 0;
contaCorrenteAlice.agencia = 1002;
contaCorrenteAlice.tipoDeConta = 'Conta Poupança';


//saídas
//console.log(cliente1, cliente2);
console.log(contaCorrenteDaniel.saldo);
contaCorrenteDaniel.saldo += 500;
contaCorrenteDaniel.depositar(1500);
contaCorrenteDaniel.depositar(1700);
contaCorrenteDaniel.sacar(100);
console.log(contaCorrenteDaniel);
/* const valorSacado = contaCorrenteDaniel.sacar(50);
console.log(valorSacado) */

contaCorrenteAlice.saldo += 500;
contaCorrenteAlice.depositar(1500);
contaCorrenteAlice.depositar(1500);
contaCorrenteAlice.sacar(200);
console.log(contaCorrenteAlice);
