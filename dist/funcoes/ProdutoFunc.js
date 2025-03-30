"use strict";
// funcoes/ProdutoFunc.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarProduto = criarProduto;
exports.listarProdutos = listarProdutos;
exports.buscarProduto = buscarProduto;
exports.atualizarProduto = atualizarProduto;
exports.removerProduto = removerProduto;
exports.existeProdutoComCategoria = existeProdutoComCategoria;
let produtos = [];
let proximoId = 1;
function criarProduto(nome, descricao, preco, quantidade, categoriaId) {
    produtos.push({ id: proximoId, nome, descricao, preco, quantidade, categoriaId });
    proximoId++;
    return `Produto '${nome}' criado com sucesso.`;
}
function listarProdutos() {
    return produtos;
}
function buscarProduto(input) {
    const produto = produtos.find(p => p.id === input || p.nome === input);
    return produto || "Produto não encontrado.";
}
function atualizarProduto(id, nome, descricao, preco, quantidade) {
    const produto = produtos.find(p => p.id === id);
    if (!produto)
        return "Produto não encontrado.";
    produto.nome = nome;
    produto.descricao = descricao;
    produto.preco = preco;
    produto.quantidade = quantidade;
    return `Produto '${nome}' atualizado com sucesso.`;
}
function removerProduto(id) {
    const index = produtos.findIndex(p => p.id === id);
    if (index === -1)
        return "Produto não encontrado.";
    produtos.splice(index, 1);
    return "Produto removido com sucesso.";
}
function existeProdutoComCategoria(categoriaId) {
    return produtos.some(p => p.categoriaId === categoriaId);
}
