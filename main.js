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
    this.setSaldo(this.getSaldo() + juros);
    return `Juros de ${juros} reais foram adicionados ao seu saldo. Seu saldo atual é de ${this.getSaldo()} reais.`;
  }
}

function ContaCorrente(numero, titular, saldo, limite) {
  Conta.call(this, numero, titular, saldo);
  this.limite = limite;

  this.sacar = function(valor) {
    if(valor <= this.getSaldo() + this.limite) {
      this.setSaldo(this.getSaldo() - valor);
      return `Você sacou ${valor} reais. Seu saldo atual é de ${this.getSaldo()} reais.`;
    } else {
      return `Você possui saldo insuficiente para essa operação.`;
    }
  }
}

ContaPoupanca1 = new ContaPoupanca(123, 'João', 1000, 10);
ContaCorrente1 = new ContaCorrente(456, 'Maria', 1500, 500);
ContaCorrente2 = new ContaCorrente(789, 'José', 2000, 1000);







