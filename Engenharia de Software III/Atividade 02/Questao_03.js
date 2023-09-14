class Conta {
    constructor(numeroConta, saldo) {
      this.numeroConta = numeroConta;
      this.saldo = saldo;
    }
  
    atualizarSaldo(valor) {
      this.saldo += valor;
    }
  
    exibirSaldo() {
      console.log(`Saldo da Conta ${this.numeroConta}: R$ ${this.saldo}`);
    }
}
  
class Compra {
    constructor(descricao, valor) {
      this.descricao = descricao;
      this.valor = valor;
    }
  
    realizarCompra(conta) {
      if (conta.saldo >= this.valor) {
        conta.atualizarSaldo(-this.valor); // Deduz o valor da compra do saldo
        console.log(`Compra realizada: ${this.descricao}`);
      } else {
        console.log(`Saldo insuficiente para a compra: ${this.descricao}`);
      }
    }
}
  
class Cliente {
    constructor(id, nome, endereco, conta) {
      this.id = id;
      this.nome = nome;
      this.endereco = endereco;
      this.conta = conta;
    }
  
    exibirInformacoes() {
      console.log(`Cliente: ${this.nome}`);
      console.log(`Endereço: ${this.endereco}`);
      this.conta.exibirSaldo();
    }
}