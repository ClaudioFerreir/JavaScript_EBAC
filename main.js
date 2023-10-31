function Conta(numero, titular, saldo) {
  this.numero = numero;
  this.titular = titular;
  let _saldo = saldo;

  this.getSaldo = function() {
    return _saldo;
  }

  this.setSaldo = function(novoSaldo) { 
    _saldo = novoSaldo;
  }

  this.depositar = function(valor) {
    if(typeof valor === 'number' && valor > 0) {
      _saldo += valor;
      return `Você depositou ${valor} reais. Seu saldo atual é de ${_saldo} reais.`;
    } else {
      return `Valor inválido para depósito.`;
    }
  }

  this.sacar = function(valor) {
    if(valor <= _saldo) {
      _saldo -= valor;
      return `Você sacou ${valor} reais. Seu saldo atual é de ${_saldo} reais.`;
    } else {
      return `Você possui saldo insuficiente para essa operação.`;
    }
  }
}

function ContaPoupanca(numero, titular, saldo, taxaDeJuros) {
  Conta.call(this, numero, titular, saldo);
  this.taxaDeJuros = taxaDeJuros;

  this.calcularJuros = function() {
    const juros = this.getSaldo() * (this.taxaDeJuros / 100);
    novoSaldo = this.getSaldo() + juros;
    this.setSaldo(novoSaldo);
    return `Juros de ${juros} reais foram adicionados ao seu saldo. Seu saldo atual é de ${this.getSaldo()} reais.`;
  }
}


ContaPop1 = new ContaPoupanca(123, 'João', 1000, 10);
console.log(ContaPop1);
console.log(ContaPop1.calcularJuros());

/* function ContaCorrente(numero_conta, titular, saldo, limite) {
  this.limite = limite;
  
  Conta.call(this, numero_conta, titular, saldo);
  
  this.sacar = function(valor) {
    if(valor <= this.getSaldo + limite) {
      this.getSaldo -= valor;
      return `Você sacou ${valor} reais. Seu saldo atual é de ${this.setSaldo} reais.`;
    } else {
      return `Você possui saldo insuficiente para essa operação.`;
    }
  }
} */





