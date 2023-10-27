class C6Bank{
    nome: string
    id: number
    senha: number
    saldo = 0
    constructor(nomeFornecido: string, idFornecido: number, senhaFornecida: number) {
        this.nome = nomeFornecido
        this.id = idFornecido
        this.senha = senhaFornecida
    }
}

const contaLucas = new C6Bank("Lucas", 928172198, 672562)

console.log(contaLucas.nome)