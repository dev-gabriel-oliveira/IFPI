const prompt = require('prompt-sync')();

function main() {
    console.log('Informe 3 valores\n');

    let valores = [];

    for (let i = 1; i <= 3; i++) {
        let valor = Number(prompt(`Valor ${i}: `));
        valores.push(valor);
    }

    let menorValor = Math.min(...valores);
    let maiorValor = Math.max(...valores);

    if (valores[0] === valores[1] && valores[1] === valores[2]) {
        console.log('Todos os valores são iguais!');
    } else if (valores[0] === valores[1] || valores[1] === valores[2] || valores[0] === valores[2]) {
        console.log('Dois valores são iguais!');
    } else {
        console.log('Valores distintos!');
    }

    console.log('Menor valor:', menorValor);
    console.log('Maior valor:', maiorValor);
}

main();
