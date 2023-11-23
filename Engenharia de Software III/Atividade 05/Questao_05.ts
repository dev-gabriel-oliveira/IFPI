class Perfil {
    private id: string;
    private nome: string;

    constructor(id: string, nome: string) {
        this.id = id;
        this.nome = nome;
    }

    getNome() {
        return this.nome;
    }
}

interface Publicavel {
    exibir(): void;
    getAutor(): Perfil;
}

class Postagem implements Publicavel {
    private id: string;
    private autor: Perfil;
    private conteudo: string;
    private reacoes: Reacao[];
    private comentarios: Comentario[];
    
    constructor(id: string, autor: Perfil, conteudo: string) {
        this.id = id;
        this.autor = autor;
        this.conteudo = conteudo;
    }
    
    exibir() {
        console.log(
            `\n\n_____________________`,
            `\nPostagem [${this.id}]`,
            `\nAutor: ${this.autor.getNome()}`,
            `\nConteudo: "${this.conteudo}"`
        );
    }

    exibirReacoes() {
        this.reacoes.forEach(reacao => reacao.exibir());
    }
    exibirComentarios() {
        this.comentarios.forEach(comentario => comentario.exibir());
    }

    getId() {
        return this.id;
    }

    getConteudo() {
        return this.conteudo;
    }

    getAutor(): Perfil {
        return this.autor;
    }
}

class Reacao implements Publicavel {
    private autor: Perfil;
    private postagem: Postagem;
    private tipoReacao: string;

    constructor(autor: Perfil, postagem: Postagem, tipoReacao: string) {
        this.autor = autor;
        this.postagem = postagem;
        this.tipoReacao = tipoReacao;
    }

    exibir(): void {
        console.log(
            `\n\n_____________________`,
            `\nPostagem [${this.postagem.getId()}]`,
            `\n- - - - - - - - - - - - -`,
            `\nAutor: ${this.autor.getNome()}`,
            `\nReacao: (${this.tipoReacao})`,
        );
    }

    getAutor(): Perfil {
        return this.autor;
    }
}

class Comentario implements Publicavel {
    private autor: Perfil;
    private postagem: Postagem;
    private conteudo: string;

    constructor(autor: Perfil, postagem: Postagem, conteudo: string) {
        this.autor = autor;
        this.postagem = postagem;
        this.conteudo = conteudo;
    }

    exibir(): void {
        console.log(
            `\n\n_____________________`,
            `\nPostagem [${this.postagem.getId()}]`,
            `\n- - - - - - - - - - - - -`,
            `\nAutor: ${this.autor.getNome()}`,
            `\nComentário: "${this.conteudo}"`,
        );
    }

    getAutor(): Perfil {
        return this.autor;
    }
}

// Criando perfis
const perfil_Joao = new Perfil("1", "Joao");
const perfil_Maria = new Perfil("2", "Maria");
const perfil_Pedro = new Perfil("3", "Pedro");

// Criando postagens
const postagem1 = new Postagem("101", perfil_Joao, "Conteúdo da postagem 1");
const postagem2 = new Postagem("102", perfil_Maria, "Conteúdo da postagem 2");

// Criando reações
const reacao1 = new Reacao(perfil_Maria, postagem1, "Curtir");
const reacao2 = new Reacao(perfil_Pedro, postagem1, "Amar");

// Criando comentários
const comentario1 = new Comentario(perfil_Maria, postagem1, "Comentário na postagem 1");
const comentario2 = new Comentario(perfil_Pedro, postagem1, "Outro comentário na postagem 1");
const comentario3 = new Comentario(perfil_Joao, postagem2, "Comentário na postagem 2");

// Exibindo informações
postagem1.exibir();


reacao1.exibir();
reacao2.exibir();

comentario1.exibir();
comentario2.exibir();
comentario3.exibir();
