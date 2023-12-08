import * as fs from 'fs';

class Manipulador {
  static manipular(
    acao: 'criar' | 'ler' | 'editar' | 'remover',
    nome: string,
    conteudo: string,
    caminho: string
  ): string | null {
    if (acao === 'criar') {
      if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
        return 'Nome, conteúdo e caminho são obrigatórios.';
      }

      try {
        fs.writeFileSync(caminho + '/' + nome, conteudo);
        return `Arquivo ${nome} criado com sucesso.`;
      } catch (error) {
        return `Erro ao criar o arquivo ${nome}. ${error.message}`;
      }
    } else if (acao === 'ler') {
      if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
        return 'Nome, conteúdo e caminho são obrigatórios.';
      }

      try {
        const conteudoArquivo = fs.readFileSync(caminho + '/' + nome, 'utf-8');
        return `Conteúdo do arquivo ${nome}: ${conteudoArquivo}`;
      } catch (error) {
        return `Erro ao ler o arquivo ${nome}. ${error.message}`;
      }
    } else if (acao === 'editar') {
      if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
        return 'Nome, conteúdo e caminho são obrigatórios.';
      }

      try {
        fs.writeFileSync(caminho + '/' + nome, conteudo);
        return `Arquivo ${nome} editado com sucesso.`;
      } catch (error) {
        return `Erro ao editar o arquivo ${nome}. ${error.message}`;
      }
    } else if (acao === 'remover') {
      if (!nome.trim() || !conteudo.trim() || !caminho.trim()) {
        return 'Nome, conteúdo e caminho são obrigatórios.';
      }

      try {
        fs.unlinkSync(caminho + '/' + nome);
        return `Arquivo ${nome} removido com sucesso.`;
      } catch (error) {
        return `Erro ao remover o arquivo ${nome}. ${error.message}`;
      }
    } else {
      return 'Ação inválida.';
    }
  }
}

// Exemplo de uso
const resultado = Manipulador.manipular('criar', 'meuarquivo.txt', 'Conteúdo do arquivo.', '/caminho/do/arquivo');
console.log(resultado);
      
