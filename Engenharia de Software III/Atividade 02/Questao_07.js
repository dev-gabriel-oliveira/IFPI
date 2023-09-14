// FORTE ACOPLAMENTO
class Funcionario {
    constructor(nome) {
      this.nome = nome;
      this.reajustes = [];
    }
  
    adicionarReajuste(reajuste) {
      this.reajustes.push(reajuste);
    }
  
    calcularValorTotalReajustes() {
      let valorTotalReajustes = 0;
      for (const reajuste of this.reajustes) {
        valorTotalReajustes += reajuste.valor;
      }
      return valorTotalReajustes;
    }
}
  
class Reajuste {
    constructor(valor) {
        this.valor = valor;
    }
}

// BAIXO ACOPLAMENTO
class Funcionario {
    constructor(nome) {
        this.nome = nome;
        this.reajustes = [];
    }
  
    adicionarReajuste(reajuste) {
        this.reajustes.push(reajuste);
    }
  
    calcularValorTotalReajustes() {
        return this.reajustes.reduce((total, reajuste) => total + reajuste.calcularValor(), 0);
    }
}
  
class Reajuste {
    constructor(valor) {
        this.valor = valor;
    }
  
    calcularValor() {
        return this.valor;
    }
}