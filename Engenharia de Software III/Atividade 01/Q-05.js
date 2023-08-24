const prompt = require('prompt-sync')();

function main() {
    console.log('## Pesquisa Eleitoral ##\n');

    let votos = {
        '45': 0, // Serra
        '13': 0, // Dilma
        '23': 0, // Ciro
        '99': 0, // Indecisos
        '98': 0, // Outros
        '0': 0,  // Nulo/Branco
    };

    let totalEntrevistados = 0;

    while (true) {
        console.log('\n# |Serra(45)|Dilma(13)|Ciro(23)|Indeciso(99)|',
                    '\n# |Outros(98)| Nulo/Branco(0) |Encerrar(-1)|');

        let voto = Number(prompt('Informe sua intenção de voto: '));

        if (voto === -1) {
            break;
        }

        if (!(voto in votos)) {
            throw new Error('Voto inválido!');
        }

        votos[voto]++;
        totalEntrevistados++;
    }

    const percentuais = {};

    for (const candidato in votos) {
        percentuais[candidato] = (votos[candidato] * 100) / totalEntrevistados;
    }

    console.log('\n-- Resultado --\n');
    
    for (const candidato in percentuais) {
        console.log(`${candidato} ------------> ${percentuais[candidato].toFixed(1)}%`);
    }

    console.log('\nTotal de entrevistados:', totalEntrevistados);

    const percentualLimite = 50;
    const candidatosPrincipais = ['45', '13', '23'];

    const segundoTurnoImprovavel = candidatosPrincipais.some(candidato => percentuais[candidato] > percentualLimite);

    if (segundoTurnoImprovavel) {
        console.log('Segundo Turno: Improvável!');
    } else {
        console.log('Segundo Turno: Provável!');
    }
}

main();
