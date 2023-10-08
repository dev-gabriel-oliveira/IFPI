class AuditoriaFinanceiraService {
    executar(auditaveis: Auditavel[]): void {
        for (const auditavel of auditaveis) {
            auditavel.auditar();
        }
    }
}
  
interface Auditavel {
    auditar(): void;
}

enum TipoInvestimento {
    RENDA_FIXA,
    RENDA_VARIAVEL,
}
  
enum TipoTransacao {
    CREDITO,
    DEBITO,
}
  
class ContaCorrente implements Auditavel{
    private numero: string;
    private saldo: number;
    private transacoes: Transacao[];
  
    constructor(numero: string, saldo: number) {
        this.numero = numero;
        this.saldo = saldo;
        this.transacoes = [];
    }
    auditar(): void {
        console.log(`Auditoria para Conta Corrente - Número da Conta: ${this.numero}`);
        
        if (this.saldo < 0) {
          console.log('Saldo negativo encontrado na conta.');
        }
    }
  
    getNumero(): string {
        return this.numero;
    }
  
    getSaldo(): number {
        return this.saldo;
    }
  
    adicionarTransacao(transacao: Transacao): void {
        this.transacoes.push(transacao);
    }
  
    getTransacoes(): Transacao[] {
        return this.transacoes;
    }
}
  
class Investimento implements Auditavel{
    private id: number;
    private valor: number;
    private tipo: TipoInvestimento;
    private statusRisco: string;
  
    constructor(id: number, valor: number, tipo: TipoInvestimento) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
        this.statusRisco = '';
    }

    auditar(): void {
        console.log(`Auditoria para Investimento - ID: ${this.id}`);
        
        if (this.valor > 100000) {
          console.log('Investimento com valor muito alto.');
        }
    }
  
    getId(): number {
        return this.id;
    }
  
    getValor(): number {
        return this.valor;
    }
  
    getTipo(): TipoInvestimento {
        return this.tipo;
    }
  
    getStatusRisco(): string {
        return this.statusRisco;
    }
  
    setStatusRisco(statusRisco: string): void {
        this.statusRisco = statusRisco;
    }
}
  
class Transacao implements Auditavel{
    private id: number;
    private valor: number;
    private tipo: TipoTransacao;
  
    constructor(id: number, valor: number, tipo: TipoTransacao) {
        this.id = id;
        this.valor = valor;
        this.tipo = tipo;
    }

    auditar(): void {
        console.log(`Auditoria para Transacao - ID: ${this.id}`);
        
        if (this.valor > 1000 && this.tipo === TipoTransacao.DEBITO) {
          console.log('Transação de débito com valor elevado.');
        }
    }
  
    getId(): number {
        return this.id;
    }
  
    getValor(): number {
        return this.valor;
    }
  
    getTipo(): TipoTransacao {
        return this.tipo;
    }
}
  
class ContaCorrenteService {
    static filtrarTransacoesInvalidas(conta: ContaCorrente): Transacao[] {
        // Filtra valores negativos
        const transacoesInvalidas = conta.getTransacoes().filter(
            (transacao) => transacao.getValor() < 0
        );
        return transacoesInvalidas;
    }
}
  
class InvestimentoService {
    static avaliarRisco(investimento: Investimento): void {
        // Caso Renda Fixa => Risco Baixo
        if (investimento.getTipo() === TipoInvestimento.RENDA_FIXA) {
            return investimento.setStatusRisco('Baixo');
        }
        // Caso Renda Variável => Risco Alto
        return investimento.setStatusRisco('Alto');
    }
}
  
class TransacaoService {
    static verificarFraude(transacao: Transacao): boolean {
        if (transacao.getValor() > 10000) {
            return true;
        }
        return false;
    }
}
  
// Cria Conta...
const conta = new ContaCorrente('123', 1000);

// Nova Transação
const transacao = new Transacao(1, 500, TipoTransacao.DEBITO);
conta.adicionarTransacao(transacao);

// Transações Inválidas
const transacoesInvalidas = ContaCorrenteService.filtrarTransacoesInvalidas(conta);
console.log('Transações inválidas:', transacoesInvalidas);

// Novo Investimento
const investimento = new Investimento(1, 10000, TipoInvestimento.RENDA_FIXA);
InvestimentoService.avaliarRisco(investimento);
console.log('Investimento:', investimento.getStatusRisco());

// Verifica Fraudulência
const isFraudulenta = TransacaoService.verificarFraude(transacao);
console.log('Transação é fraudulenta?', isFraudulenta);

// Realiza Auditoria
const auditoriaService = new AuditoriaFinanceiraService();
const auditaveis: Auditavel[] = [conta, investimento, transacao];
auditoriaService.executar(auditaveis);
