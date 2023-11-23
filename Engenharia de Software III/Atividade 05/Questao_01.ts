class ContaBancaria {
    private saldo: number;
  
    constructor(saldoInicial: number) {
      this.saldo = saldoInicial;
    }
  
    depositar(valor: number): void {
      this.saldo += valor;
    }
  
    sacar(valor: number): void {
      this.saldo -= valor;
    }
  
    getSaldo(): number {
      return this.saldo;
    }
}
  
class ContaPoupanca {
    private contaBancaria: ContaBancaria;
  
    constructor(saldoInicial: number) {
      this.contaBancaria = new ContaBancaria(saldoInicial);
    }
  
    sacar(valor: number): void {
      if (valor > 1000) {
        throw new Error("Não pode sacar mais de 1000 em uma poupança");
      }
  
      this.contaBancaria.sacar(valor);
    }
  
    getSaldo(): number {
      return this.contaBancaria.getSaldo();
    }
}

// Neste exemplo, a classe "ContaPoupanca" tem uma instância de "ContaBancaria" como
// um membro privado e delega as operações bancárias para essa instância. Isso evita
// os problemas associados à herança e permite que você mantenha a flexibilidade de adicionar
// comportamentos específicos à classe "ContaPoupanca" sem comprometer a estrutura geral.