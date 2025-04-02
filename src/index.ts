// index.ts (Arquivo principal modularizado)
import * as readline from 'readline';
import { criarCategoria, listarCategorias, buscarCategoria, atualizarCategoria, removerCategoria } from './funcoes/CategoryFunc';
import { criarProduto, listarProdutos, buscarProduto, atualizarProduto, removerProduto } from './funcoes/ProdutoFunc';

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
                        criarCategoria(nome, descricao);
                        console.log("Categoria criada!");
                        menuCategorias();
                    });
                });
                break;
            case "2":
                console.table(listarCategorias());
                menuCategorias();
                break;
            case "3":
                rl.question("ID ou Nome da Categoria: ", input => {
                    console.log(buscarCategoria(input));
                    menuCategorias();
                });
                break;
            case "4":
                rl.question("ID da Categoria a Atualizar: ", id => {
                    rl.question("Novo Nome: ", nome => {
                        rl.question("Nova Descrição: ", descricao => {
                            atualizarCategoria(parseInt(id), nome, descricao);
                            console.log("Categoria atualizada!");
                            menuCategorias();
                        });
                    });
                });
                break;
            case "5":
                rl.question("ID da Categoria para Remover: ", id => {
                    removerCategoria(parseInt(id));
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
                                    criarProduto(nome, descricao, parseFloat(preco), parseInt(quantidade), parseInt(categoriaId));
                                    console.log("Produto criado!");
                                    menuProdutos();
                                });
                            });
                        });
                    });
                });
                break;
            case "2":
                console.table(listarProdutos());
                menuProdutos();
                break;
            case "3":
                rl.question("ID, Nome ou Categoria do Produto: ", input => {
                    console.log(buscarProduto(input));
                    menuProdutos();
                });
                break;
            case "4":
                rl.question("ID do Produto a Atualizar: ", id => {
                    rl.question("Novo Nome: ", nome => {
                        rl.question("Nova Descrição: ", descricao => {
                            rl.question("Novo Preço: ", preco => {
                                rl.question("Nova Quantidade: ", quantidade => {
                                    atualizarProduto(parseInt(id), nome, descricao, parseFloat(preco), parseInt(quantidade));
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
                    removerProduto(parseInt(id));
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
