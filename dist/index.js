"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// index.ts (Arquivo principal modularizado)
const readline = __importStar(require("readline"));
const CategoriaFunc_1 = require("./funcoes/CategoriaFunc");
const ProdutoFunc_1 = require("./funcoes/ProdutoFunc");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function menuPrincipal() {
    console.log("\n--- Gerenciador de Inventário ---");
    console.log("1. Gerenciar Categorias");
    console.log("2. Gerenciar Produtos");
    console.log("3. Sair");
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case "1":
                menuCategorias();
                break;
            case "2":
                menuProdutos();
                break;
            case "3":
                rl.close();
                break;
            default:
                console.log("Opção inválida!");
                menuPrincipal();
        }
    });
}
function menuCategorias() {
    console.log("\n--- Gestão de Categorias ---");
    console.log("1. Criar Categoria");
    console.log("2. Listar Categorias");
    console.log("3. Buscar Categoria");
    console.log("4. Atualizar Categoria");
    console.log("5. Remover Categoria");
    console.log("6. Voltar");
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case "1":
                rl.question("Nome da categoria: ", nome => {
                    rl.question("Descrição: ", descricao => {
                        (0, CategoriaFunc_1.criarCategoria)(nome, descricao);
                        console.log("Categoria criada!");
                        menuCategorias();
                    });
                });
                break;
            case "2":
                console.table((0, CategoriaFunc_1.listarCategorias)());
                menuCategorias();
                break;
            case "3":
                rl.question("ID ou Nome da Categoria: ", input => {
                    console.log((0, CategoriaFunc_1.buscarCategoria)(input));
                    menuCategorias();
                });
                break;
            case "4":
                rl.question("ID da Categoria a Atualizar: ", id => {
                    rl.question("Novo Nome: ", nome => {
                        rl.question("Nova Descrição: ", descricao => {
                            (0, CategoriaFunc_1.atualizarCategoria)(parseInt(id), nome, descricao);
                            console.log("Categoria atualizada!");
                            menuCategorias();
                        });
                    });
                });
                break;
            case "5":
                rl.question("ID da Categoria para Remover: ", id => {
                    (0, CategoriaFunc_1.removerCategoria)(parseInt(id));
                    //console.log("Categoria removida!");
                    menuCategorias();
                });
                break;
            case "6":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida!");
                menuCategorias();
        }
    });
}
function menuProdutos() {
    console.log("\n--- Gestão de Produtos ---");
    console.log("1. Criar Produto");
    console.log("2. Listar Produtos");
    console.log("3. Buscar Produto");
    console.log("4. Atualizar Produto");
    console.log("5. Remover Produto");
    console.log("6. Voltar");
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case "1":
                rl.question("Nome do produto: ", nome => {
                    rl.question("Descrição: ", descricao => {
                        rl.question("Preço: ", preco => {
                            rl.question("Quantidade: ", quantidade => {
                                rl.question("ID da Categoria: ", categoriaId => {
                                    (0, ProdutoFunc_1.criarProduto)(nome, descricao, parseFloat(preco), parseInt(quantidade), parseInt(categoriaId));
                                    console.log("Produto criado!");
                                    menuProdutos();
                                });
                            });
                        });
                    });
                });
                break;
            case "2":
                console.table((0, ProdutoFunc_1.listarProdutos)());
                menuProdutos();
                break;
            case "3":
                rl.question("ID, Nome ou Categoria do Produto: ", input => {
                    console.log((0, ProdutoFunc_1.buscarProduto)(input));
                    menuProdutos();
                });
                break;
            case "4":
                rl.question("ID do Produto a Atualizar: ", id => {
                    rl.question("Novo Nome: ", nome => {
                        rl.question("Nova Descrição: ", descricao => {
                            rl.question("Novo Preço: ", preco => {
                                rl.question("Nova Quantidade: ", quantidade => {
                                    (0, ProdutoFunc_1.atualizarProduto)(parseInt(id), nome, descricao, parseFloat(preco), parseInt(quantidade));
                                    console.log("Produto atualizado!");
                                    menuProdutos();
                                });
                            });
                        });
                    });
                });
                break;
            case "5":
                rl.question("ID do Produto para Remover: ", id => {
                    (0, ProdutoFunc_1.removerProduto)(parseInt(id));
                    console.log("Produto removido!");
                    menuProdutos();
                });
                break;
            case "6":
                menuPrincipal();
                break;
            default:
                console.log("Opção inválida!");
                menuProdutos();
        }
    });
}
menuPrincipal();
