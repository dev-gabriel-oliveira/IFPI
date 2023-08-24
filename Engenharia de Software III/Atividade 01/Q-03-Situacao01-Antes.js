class CarrinhoDeCompras {
    constructor() {
        this.itens = [];
        this.statusPagamento = 'PENDENTE'; // Adicionando status de pagamento
    }

    adicionarItem(item) {
        this.itens.push(item);
    }

    calcularTotal() {
        let total = 0;
        for (const item of this.itens) {
            total += item.valor;
        }
        return total;
    }
}

class ItemDeCompra {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
}

const carrinhoDeCompras = new CarrinhoDeCompras();
const itemDeCompra1 = new ItemDeCompra('Produto A', 50);
const itemDeCompra2 = new ItemDeCompra('Produto B', 30);

carrinhoDeCompras.adicionarItem(itemDeCompra1);
carrinhoDeCompras.adicionarItem(itemDeCompra2);

console.log('Total do carrinho de compras: R$', carrinhoDeCompras.calcularTotal());

// Finalizando Compra
if (carrinhoDeCompras.statusPagamento === 'PENDENTE') {
    carrinhoDeCompras.statusPagamento = 'FINALIZADO';
    console.log('Pagamento finalizado com sucesso.');
} else {
    console.log('Pagamento já finalizado ou não há itens no carrinho.');
}

console.log('Status de pagamento:', carrinhoDeCompras.statusPagamento);
