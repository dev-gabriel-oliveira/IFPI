// Validando Imposto de Renda
class ValidacaoCPF {
    static executar(cpf: string): boolean {
        return cpf.length === 11;
    }
}
class ValidacaoRendimentosDespesas {
    static executar(rendimentos: number[], despesas: number[]): boolean {
        return rendimentos.every((valor) => valor >= 0) && despesas.every((valor) => valor >= 0);
    }
}
class ValidacaoLimiteRendimentos {
    static executar(rendimentos: number[]): boolean {
        return rendimentos.length <= 5;
    }
}

class ValidacaoImpostoDeRenda {
    static validar (cpfContribuinte: string, despesas: number[], rendimentos: number[]) {
        const validacaoCPF = ValidacaoCPF.executar(cpfContribuinte);
        const validacaoRendimentosDespesas = ValidacaoRendimentosDespesas.executar(rendimentos, despesas);
        const validacaoLimiteRendimentos = ValidacaoLimiteRendimentos.executar(rendimentos);

        return validacaoCPF && validacaoLimiteRendimentos && validacaoRendimentosDespesas;
    }
}

// Processando Imposto de Renda
class CalculadoraImpostoDeRenda {
    calcularImposto(rendimentos: number[], despesas: number[]): number {
        const rendaTotal = rendimentos.reduce((acc, valor) => acc + valor, 0);
        const despesaTotal = despesas.reduce((acc, valor) => acc + valor, 0);
        const baseCalculo = rendaTotal - despesaTotal;
    
        if (baseCalculo <= 1903.98) {
            return 0.0;
        }
        if (baseCalculo <= 2826.65) {
            return baseCalculo * 0.075 - 142.80;
        }
        // E assim por diante, para outros intervalos...

        // Para bc acima de 4664.68
        return baseCalculo * 0.275 - 869.36;
    }
}
class RelatorioImpostoDeRenda {
    gerarRelatorio(cpfContribuinte: string, rendimentos: number[], despesas: number[], impostoDevido: number): void {
        console.log(`CPF: ${cpfContribuinte}\n` +
                    `Rendimentos: ${rendimentos}\n` + 
                    `Despesas: ${despesas}\n` + 
                    `Imposto Devido: ${impostoDevido.toFixed(2)}\n`);
    }
}
  
class ImpostoDeRenda {
    private cpfContribuinte: string;
    private rendimentos: number[];
    private despesas: number[];
  
    constructor(cpfContribuinte: string, rendimentos: number[], despesas: number[]) {
        this.cpfContribuinte = cpfContribuinte;
        this.rendimentos = rendimentos;
        this.despesas = despesas;
    }
  
    processar(): void {
        // Dipara a Validação
        const validacao = ValidacaoImpostoDeRenda.validar(this.cpfContribuinte, this.rendimentos, this.despesas);
        if (validacao) {
            // Dispara a Calculadora de Imposto
            const calculadora = new CalculadoraImpostoDeRenda();
            const impostoDevido = calculadora.calcularImposto(this.rendimentos, this.despesas);
            const relatorio = new RelatorioImpostoDeRenda();
            relatorio.gerarRelatorio(this.cpfContribuinte, this.rendimentos, this.despesas, impostoDevido);

            return console.log('Operação Bem-Sucedida!');
        }
        return console.error("Falha nas validações!");
    }

    obterCpfContribuinte(): string{
        return this.cpfContribuinte;
    }
    obterRendimentos(): number[] {
        return this.rendimentos;
    }
    obterDespesas(): number[] {
        return this.despesas;
    }
}
  
// Exemplo de uso
const impostoDeRenda = new ImpostoDeRenda("12345678910", [10000, 9000], [4200, 3500]);
impostoDeRenda.processar();
  