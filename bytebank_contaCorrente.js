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
    _saldo;

    sacar(valor){
        if(this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
        }
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
contaCorrenteAlice.agencia = 1001;
contaCorrenteAlice.tipoDeConta = 'Conta Corrente';

//console.log(cliente1, cliente2);
console.log(contaCorrenteDaniel.saldo);
//contaCorrenteDaniel.saldo += 100;
contaCorrenteDaniel.depositar(10000);
contaCorrenteDaniel.sacar(50);
console.log(contaCorrenteDaniel)


console.log(contaCorrenteAlice.saldo);
//contaCorrenteAlice.saldo += 500;
contaCorrenteAlice.depositar(2200);
contaCorrenteAlice.sacar(100);
console.log(contaCorrenteAlice);

/* console.log(cliente1);
console.log(cliente2); */

/* PRIVATE FIELDS - Como #saldo é um campo privado, não aparece ao executarmos o console.log() da classe. 
Só é possível acessá-lo realmente dentro da classe. Ele está sendo alterado, mas só veremos 
isso dentro da classe. Se chamarmos o console.log() em qualquer outro lugar do código, o #saldo 
não aparecerá. */