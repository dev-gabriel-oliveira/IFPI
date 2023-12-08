import * as fs from 'fs';

interface IOperacao {
  executar(arquivo: Arquivo): string | null;
}

interface IValidador<T> {
  validar(objeto: T): string | null;
}

class Arquivo {
  constructor(public nome: string, public conteudo: string, public caminho: string) {}
}

class ValidadorDeParametros implements IValidador<Arquivo> {
  validar(arquivo: Arquivo): string | null {
    if (!arquivo.nome.trim() || !arquivo.conteudo.trim() || !arquivo.caminho.trim()) {
      return 'Nome, conteúdo e caminho são obrigatórios.';
    }
    return null;
  }
}

class Criador implements IOperacao {
  private validador = new ValidadorDeParametros();

  executar(arquivo: Arquivo): string | null {
    const erro = this.validador.validar(arquivo);
    if (erro) return erro;

    try {
      fs.writeFileSync(arquivo.caminho + '/' + arquivo.nome, arquivo.conteudo);
      return `Arquivo ${arquivo.nome} criado com sucesso.`;
    } catch (error) {
      return `Erro ao criar o arquivo ${arquivo.nome}. ${error.message}`;
    }
  }
}

class Leitor implements IOperacao {
  private validador = new ValidadorDeParametros();

  executar(arquivo: Arquivo): string | null {
    const erro = this.validador.validar(arquivo);
    if (erro) return erro;

    try {
      const conteudo = fs.readFileSync(arquivo.caminho + '/' + arquivo.nome, 'utf-8');
      return `Conteúdo do arquivo ${arquivo.nome}: ${conteudo}`;
    } catch (error) {
      return `Erro ao ler o arquivo ${arquivo.nome}. ${error.message}`;
    }
  }
}

class Editor implements IOperacao {
  private validador = new ValidadorDeParametros();

  executar(arquivo: Arquivo): string | null {
    const erro = this.validador.validar(arquivo);
    if (erro) return erro;

    try {
      fs.writeFileSync(arquivo.caminho + '/' + arquivo.nome, arquivo.conteudo);
      return `Arquivo ${arquivo.nome} editado com sucesso.`;
    } catch (error) {
      return `Erro ao editar o arquivo ${arquivo.nome}. ${error.message}`;
    }
  }
}

class Removedor implements IOperacao {
  private validador = new ValidadorDeParametros();

  executar(arquivo: Arquivo): string | null {
    const erro = this.validador.validar(arquivo);
    if (erro) return erro;

    try {
      fs.unlinkSync(arquivo.caminho + '/' + arquivo.nome);
      return `Arquivo ${arquivo.nome} removido com sucesso.`;
    } catch (error) {
      return `Erro ao remover o arquivo ${arquivo.nome}. ${error.message}`;
    }
  }
}

class Manipulador {
  static manipular(operacao: IOperacao, arquivo: Arquivo): string | null {
    return operacao.executar(arquivo);
  }
}

// Exemplo de uso
const arquivoExemplo = new Arquivo('meuarquivo.txt', 'Conteúdo do arquivo.', '/caminho/do/arquivo');
const criador = new Criador();
const resultado = Manipulador.manipular(criador, arquivoExemplo);
console.log(resultado);
  
