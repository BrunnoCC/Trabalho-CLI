interface Categoria {
    id: number;
    nome: string;
    descricao: string;
    dataCriacao: Date;
}

let categorias: Categoria[] = [];
let proximoIdCategoria = 1;

export function criarCategoria(nome: string, descricao: string): string {
    categorias.push({ id: proximoIdCategoria, nome, descricao, dataCriacao: new Date() });
    proximoIdCategoria++;
    return `Categoria '${nome}' criada com sucesso.`;
}

export function listarCategorias(): Categoria[] {
    return categorias;
}

export function buscarCategoria(input: string | number): Categoria | string {
    const categoria = categorias.find(c => c.id === input || c.nome === input);
    return categoria || "Categoria não encontrada.";
}

export function atualizarCategoria(id: number, nome: string, descricao: string): string {
    const categoria = categorias.find(c => c.id === id);
    if (!categoria) return "Categoria não encontrada.";
    categoria.nome = nome;
    categoria.descricao = descricao;
    return `Categoria '${nome}' atualizada com sucesso.`;
}

export function removerCategoria(id: number): string {
    if (existeProdutoComCategoria(id)) {
        console.log("Não é possível remover a categoria, pois há produtos associados a ela.");
        return "Não é possível remover a categoria, pois há produtos associados a ela.";
    }

    const index = categorias.findIndex(c => c.id === id);
    if (index === -1) return "Categoria não encontrada.";
    categorias.splice(index, 1);
    console.log("Categoria removida com sucesso");
    return "Categoria removida com sucesso.";
}

import { existeProdutoComCategoria } from './ProdutoFunc';
