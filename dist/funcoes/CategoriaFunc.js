"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.criarCategoria = criarCategoria;
exports.listarCategorias = listarCategorias;
exports.buscarCategoria = buscarCategoria;
exports.atualizarCategoria = atualizarCategoria;
exports.removerCategoria = removerCategoria;
let categorias = [];
let proximoIdCategoria = 1;
function criarCategoria(nome, descricao) {
    categorias.push({ id: proximoIdCategoria, nome, descricao, dataCriacao: new Date() });
    proximoIdCategoria++;
    return `Categoria '${nome}' criada com sucesso.`;
}
function listarCategorias() {
    return categorias;
}
function buscarCategoria(input) {
    const categoria = categorias.find(c => c.id === input || c.nome === input);
    return categoria || "Categoria não encontrada.";
}
function atualizarCategoria(id, nome, descricao) {
    const categoria = categorias.find(c => c.id === id);
    if (!categoria)
        return "Categoria não encontrada.";
    categoria.nome = nome;
    categoria.descricao = descricao;
    return `Categoria '${nome}' atualizada com sucesso.`;
}
function removerCategoria(id) {
    if ((0, ProdutoFunc_1.existeProdutoComCategoria)(id)) {
        console.log("Não é possível remover a categoria, pois há produtos associados a ela.");
        return "Não é possível remover a categoria, pois há produtos associados a ela.";
    }
    const index = categorias.findIndex(c => c.id === id);
    if (index === -1)
        return "Categoria não encontrada.";
    categorias.splice(index, 1);
    console.log("Categoria removida com sucesso");
    return "Categoria removida com sucesso.";
}
const ProdutoFunc_1 = require("./ProdutoFunc");
