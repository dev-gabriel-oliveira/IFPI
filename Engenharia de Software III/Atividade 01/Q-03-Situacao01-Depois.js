class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
        this.statusPagamento = 'PENDENTE';
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        let total = 0;
        for (const item of this.itens) {
            total += item.obterValor();
        }
        return total;
    }

    finalizar() {
        if (this.statusPagamento === 'FINALIZADO') {
            throw new Error('Pagamento já finalizado ou não há itens no carrinho.');
        }
        
        this.statusPagamento = 'FINALIZADO';
        console.log('Pagamento finalizado com sucesso.');
    }
}

class ItemDeCompra {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }

    obterValor() {
        return this.valor;
    }
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const itemDeCompra1 = new ItemDeCompra('Produto A', 50);
const itemDeCompra2 = new ItemDeCompra('Produto B', 30);

carrinhoDeCompras.adicionarItem(itemDeCompra1);
carrinhoDeCompras.adicionarItem(itemDeCompra2);

console.log('Total do carrinho de compras: R$', carrinhoDeCompras.calcularTotal());

carrinhoDeCompras.finalizar(); // Finalizando o pagamento
carrinhoDeCompras.finalizar(); // Tentando finalizar novamente

console.log('Status de pagamento:', carrinhoDeCompras.statusPagamento);
