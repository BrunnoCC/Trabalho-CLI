export class Categoria {
    constructor(
        public id: number,
        public nome: string,
        public descricao: string,
        public dataCriacao: Date = new Date()
    ) {}
}