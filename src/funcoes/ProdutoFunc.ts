// funcoes/ProdutoFunc.ts

interface Produto {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    quantidade: number;
    categoriaId: number;
}

let produtos: Produto[] = [];
let proximoId = 1;

export function criarProduto(nome: string, descricao: string, preco: number, quantidade: number, categoriaId: number): string {
    produtos.push({ id: proximoId, nome, descricao, preco, quantidade, categoriaId });
    proximoId++;
    return `Produto '${nome}' criado com sucesso.`;
}

export function listarProdutos(): Produto[] {
    return produtos;
}

export function buscarProduto(input: string | number): Produto | string {
    const produto = produtos.find(p => p.id === input || p.nome === input);
    return produto || "Produto não encontrado.";
}

export function atualizarProduto(id: number, nome: string, descricao: string, preco: number, quantidade: number): string {
    const produto = produtos.find(p => p.id === id);
    if (!produto) return "Produto não encontrado.";
    produto.nome = nome;
    produto.descricao = descricao;
    produto.preco = preco;
    produto.quantidade = quantidade;
    return `Produto '${nome}' atualizado com sucesso.`;
}

export function removerProduto(id: number): string {
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1) return "Produto não encontrado.";
    produtos.splice(index, 1);
    return "Produto removido com sucesso.";
}

export function existeProdutoComCategoria(categoriaId: number): boolean {
    return produtos.some(p => p.categoriaId === categoriaId);
}
