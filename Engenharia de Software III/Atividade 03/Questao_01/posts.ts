import * as fs from 'fs';

class Autor {
    private id: number
    private nome: string
    private email: string

    constructor(id: number, nome: string, email: string) {
        this.id = id;
        this.nome = nome;
        this.email = email;
    }

    obterId(): number {
        return this.id;
    }
    obterNome(): string {
        return this.nome;
    }
    obterEmail(): string {
        return this.email;
    }
}

class Post {
    private id: number;
    private texto: string;
    private autor: Autor;
    private data: Date = new Date();
    private quantidadeDeLikes: number = 0;
    private caminhoDoArquivo: string;

    constructor(id: number, texto: string, autor: Autor, caminhoDoArquivo: string) {
        this.id = id;
        this.texto = texto;
        this.autor = autor;
        this.caminhoDoArquivo = caminhoDoArquivo;
    }

    obterId() {
        return this.id;
    }
    obterTexto() {
        return this.texto;
    }
    obterAutor() {
        return this.autor;
    }
    obterData() {
        return this.data;
    }
    obterQuantidadeDeLikes() {
        return this.quantidadeDeLikes;
    }
    obterCaminhoDoArquivo() {
        return this.caminhoDoArquivo;
    }
}

class RepositorioDePosts {
    static salvarArquivo(post: Post) {
        try {
            const postData =    `ID: ${post.obterId()}\n` +
                                `Texto: ${post.obterTexto()}\n` +
                                `Autor: ${post.obterAutor().obterNome()}\n` +
                                `Data: ${post.obterData()}\n` +
                                `Quantidade de Likes: ${post.obterQuantidadeDeLikes()}\n`;
            fs.writeFileSync(post.obterCaminhoDoArquivo(), postData);
            console.log(`Post salvo em ${post.obterCaminhoDoArquivo()}`);
        } catch (error) {
            console.error(`Erro ao salvar o post em ${post.obterCaminhoDoArquivo()}: ${error}`);
        }
    }

    static lerArquivo(caminhoDoArquivo: string): {
        id: string,
        texto: string,
        autorNome: string,
        data: string,
        quantidadeDeLikes: string
    } | null {
        try {
            const fileData = fs.readFileSync(caminhoDoArquivo, 'utf-8');
            const lines = fileData.split('\n');
            
            // Parse dos dados do arquivo e criação da instância de Post
            const idMatch = lines[0].match(/ID: (.+)/);
            const textoMatch = lines[1].match(/Texto: (.+)/);
            const autorMatch = lines[2].match(/Autor: (.+)/);
            const dataMatch = lines[3].match(/Data: (.+)/);
            const likesMatch = lines[4].match(/Quantidade de Likes: (.+)/);
            
            if (idMatch && textoMatch && autorMatch && dataMatch && likesMatch) {
                const id = idMatch[1];
                const texto = textoMatch[1];
                const autorNome = autorMatch[1];
                const data = dataMatch[1];
                const quantidadeDeLikes = likesMatch[1];

                return {id: id, texto: texto, autorNome: autorNome, data: data, quantidadeDeLikes: quantidadeDeLikes};
            }
            console.error(`Formato de arquivo inválido em ${caminhoDoArquivo}`);
            return null;
        } catch (error) {
            console.error(`Erro ao ler o arquivo ${caminhoDoArquivo}: ${error}`);
            return null;
        }
    }
}

class Teste {
    static run() {
        const autor = new Autor(1, "Gabriel Oliver", "oliver@email.com");
        const post = new Post(1, "Lorem ipsum dolor sit amet.", autor, "post.txt");

        // Salvando o post em arquivo
        RepositorioDePosts.salvarArquivo(post);

        // Lendo o post de arquivo (se existir)
        const postLido = RepositorioDePosts.lerArquivo(post.obterCaminhoDoArquivo());

        if (postLido) {
            console.log("Post lido do arquivo:");
            console.log(`ID: ${postLido.id}`);
            console.log(`Texto: ${postLido.texto}`);
            console.log(`Autor: ${postLido.autorNome}`);
            console.log(`Data: ${postLido.data}`);
            console.log(`Quantidade de Likes: ${postLido.quantidadeDeLikes}`);
        } else {
            console.log("O arquivo do post não foi encontrado.");
        }
    }
}
  
// Executando os testes
Teste.run();