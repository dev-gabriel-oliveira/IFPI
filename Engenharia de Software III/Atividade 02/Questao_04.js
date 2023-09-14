class Ordenador {
    ordenar(array) {
        // Lógica de ordenação
        return array.sort();
    }
}

// Classe para manipulação de texto
class ManipuladorDeTexto {
    removerEspacos(texto) {
        // Remove os espaços
        return texto.replace(' ', '')
    }
  
    quebrarEmPalavras(texto) {
        // Quebra o texto em palavras
        return texto.split(' ');
    }
}
  
// Classe para cálculos estatísticos
class CalculadoraEstatistica {
    calcularMedia(numeros) {
        // Calcula a média
        if (numeros.length === 0) {
            return 0;
        }
        
        const soma = numeros.reduce((total, numero) => total + numero, 0);
        const media = soma / numeros.length;
        
        return media;
    }

    calcularDesvioPadrao(numeros) {
        // Calcula de desvio padrão
        const media = calcularMedia(numeros);
        const diferencaQuadrada = numeros.map(numero => Math.pow(numero - media, 2));
        const mediaDiferencaQuadrada = calcularMedia(diferencaQuadrada);
        const desvioPadrao = Math.sqrt(mediaDiferencaQuadrada);
        return desvioPadrao;
    }
}