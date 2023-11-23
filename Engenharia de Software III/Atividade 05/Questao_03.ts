import * as fs from 'fs';

class Persistencia {
  salvar(dados: string, arquivo: string): void {
    fs.writeFileSync(arquivo, dados);
  }
}

class PersistenciaJSON {
  private persistencia: Persistencia;

  constructor(persistencia: Persistencia) {
    this.persistencia = persistencia;
  }

  salvar(dados: string, arquivo: string): void {
    console.log(`\n/// Inserindo(  ${dados}  )`);

    if (!(dados.startsWith('{') && dados.endsWith('}'))) {
      throw new Error('Dados não estão em formato JSON.');
    }
    this.persistencia.salvar(dados, arquivo);
  }
}


// Em uso...

const persistenciaBase = new Persistencia();
const persistenciaJSON = new PersistenciaJSON(persistenciaBase);

const dadosValidos = '{"nome": "Fulano", "idade": 30}';
const dadosInvalidos = 'nome: Fulano, idade: 30';

// Inserindo Dados Válidos
try {
  persistenciaJSON.salvar(dadosValidos, 'Questao_03_Saves/dados_validos.json');
  console.log('Dados válidos foram salvos com sucesso.');
} catch (error) {
  console.error(`Erro ao salvar dados válidos: ${error.message}`);
}

// Inserindo Dados Inválidos
try {
  persistenciaJSON.salvar(dadosInvalidos, 'Questao_03_Saves/dados_invalidos.json');
  console.log('Dados inválidos foram salvos com sucesso.');
} catch (error) {
  console.error(`Erro ao salvar dados inválidos: ${error.message}`);
}