const prompt = require('prompt-sync')();

class Produto {
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Cliente {
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }
}

class Venda {
    constructor(cliente, produtos) {
        this.cliente = cliente;
        this.produtos = produtos;
    }
    total() {
        let total = 0;
        for (let i = 0; i < this.produtos.length; i++) {
            total += this.produtos[i].preco;
        }
        return total;
    }
}

const clientes = [];
const produtos = [];

function menu() {
    console.log("Selecione uma opção:");
    console.log("1. Inserir cliente");
    console.log("2. Inserir produto");
    console.log("3. Realizar venda");
    console.log("4. Sair");

    const opcao = prompt("Opção: ");
    switch (opcao) {
        case '1':
            inserirCliente();
            break;
        case '2':
            inserirProduto();
            break;
        case '3':
            realizarVenda();
            break;
        case '4':
            break;
        default:
            console.log("Opção inválida. Escolha novamente.");
    }
}

function inserirCliente() {
    const nome = prompt("Nome do cliente: ");
    const cpf = prompt("CPF do cliente: ");
    const cliente = new Cliente(nome, cpf);
    clientes.push(cliente);
    console.log("Cliente inserido com sucesso.");
    menu();
}

function inserirProduto() {
    const nome = prompt("Nome do produto: ");
    const preco = parseFloat(prompt("Preço do produto: "));
    const produto = new Produto(nome, preco);
    produtos.push(produto);
    console.log("Produto inserido com sucesso.");
    menu();
}

function realizarVenda() {
    if (clientes.length === 0 || produtos.length === 0) {
        console.log("Por favor, insira clientes e produtos antes de realizar uma venda.");
        menu();
        return;
    }

    console.log("Clientes disponíveis:");
    clientes.forEach((cliente, index) => {
        console.log(`${index + 1}. ${cliente.nome}`);
    });

    const clienteSelecionado = prompt("Selecione o número do cliente: ");
    const selectedClient = clientes[clienteSelecionado - 1];

    console.log("Produtos disponíveis:");
    produtos.forEach((produto, index) => {
        console.log(`${index + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)}`);
    });

    const quantidade = prompt("Quantos produtos deseja comprar? ");
    const selectedProducts = [];
    for (let i = 0; i < quantidade; i++) {
        const produtoSelecionado = prompt(`Selecione o número do produto ${i + 1}: `);
        const selectedProduct = produtos[produtoSelecionado - 1];
        selectedProducts.push(selectedProduct);
    }

    const venda = new Venda(selectedClient, selectedProducts);
    console.log(`Total da venda: R$ ${venda.total().toFixed(2)}`);
    console.log("Venda realizada com sucesso.");
    menu();
}

menu();
