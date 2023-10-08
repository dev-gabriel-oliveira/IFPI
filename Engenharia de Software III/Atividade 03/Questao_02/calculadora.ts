interface Operacao {
    executar(a: number, b: number): number;
}

class Soma implements Operacao {
    executar(a: number, b: number): number {
        return a + b;
    }
}

class Subtracao implements Operacao {
    executar(a: number, b: number): number {
        return a - b;
    }
}

class Multiplicacao implements Operacao {
    executar(a: number, b: number): number {
        return a * b;
    }
}

class Divisao implements Operacao {
    executar(a: number, b: number): number {
        return a / b;
    }
}

class Calculadora {
    private a: number;
    private b: number;
  
    constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
    }
  
    calcular(operacoes: Operacao[]): number[] {
        const resultados: number[] = [];
        for (const operacao of operacoes) {
            resultados.push(operacao.executar(this.a, this.b));
        }
        return resultados;
    }
}
  

const calculadora = new Calculadora(6, 2);
const operacoes: Operacao[] = [new Soma(), new Subtracao(), new Multiplicacao(), new Divisao()];
const resultados = calculadora.calcular(operacoes);

console.log(resultados);