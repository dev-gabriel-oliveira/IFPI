class Cliente {
    private nome: string;
    private cpf: string;
    private endereco: string;
  
    constructor(nome: string, cpf: string, endereco: string) {
      this.nome = nome;
      this.cpf = cpf;
      this.endereco = endereco;
    }
  
    // ...
}
  
class Conta {
    private saldo: number;
    private numeroConta: string;
    private cliente: Cliente;
  
    constructor(numeroConta: string, saldoInicial: number, cliente: Cliente) {
      this.numeroConta = numeroConta;
      this.saldo = saldoInicial;
      this.cliente = cliente;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      if (valor > this.saldo) {
        throw new Error("Saldo insuficiente.");
      }
      this.saldo -= valor;
    }
  
    getCliente(): Cliente {
      return this.cliente;
    }

    // ...
}