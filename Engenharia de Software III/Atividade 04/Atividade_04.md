INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ
Aluno: Gabriel Oliveira Rodrigues
Curso: ADS
Disciplina: Engenharia de Software III
Professor: Ely

Atividade 04

### 1. Por que o uso do nome próprio Liskov?
    O nome é de Barbara Liskov, uma renomada cientista da computação, que formulou este princípio em 1987. Barbara Liskov é conhecida por suas contribuições significativas para a área de ciência da computação, incluindo o desenvolvimento de linguagens de programação e sistemas distribuídos.

### 2. Qual a principal imagem relacionada ao princípio e qual a explicação sobre ela?
    A imagem associada ao Princípio da Substituição de Liskov muitas vezes é a "figura do quadrado retângulo". A explicação básica é a seguinte: se você tem uma classe Quadrado que herda de uma classe Retângulo, pois um quadrado é um tipo especial de retângulo onde todos os lados são iguais. No entanto, se a classe Quadrado herdar da classe Retângulo e tiver um método para alterar a largura, essa herança viola o Princípio da Substituição de Liskov. Isso porque você esperaria ser capaz de substituir um objeto da classe Retângulo por um objeto da classe Quadrado sem alterar o comportamento do programa, mas se você alterar a largura de um quadrado, você também altera a altura, o que não é o comportamento esperado de um retângulo.

### 3. Cite um exemplo onde a herança pode ser usada de forma conveniente, porém deixa uma impressão de que está sendo mal aplicada.
    ```typescript
    class Passaro {
        voar(): void {
            console.log('Voando...');
        }
    }

    class Pinguim extends Passaro {
        voar(): void {
            // Pinguins não podem voar, mas ainda herdaram de Pássaro
            console.log('Eu não posso voar!');
        }
    }
    ```
    Neste exemplo, a substituição do método "voar" não faz sentido para pinguins, pois eles não voam. Isso viola o Princípio de Substituição, pois a substituição da classe base "Passaro" pela classe derivada "Pinguim" altera o comportamento esperado.

### 4. Cite um exemplo onde a herança pode ser usada de forma conveniente, porém, deixa futuras expansões comprometidas ou com problemas de design.
    ```typescript
    class Forma {
        calcularVolume(): number {
            return 0;
        }
    }

    class Cilindro extends Forma {
        altura: number;
        raio: number;

        calcularVolume(): number {
            return 3.14 * (this.raio * this.raio) * this.altura;
        }
    }

    class Retangulo extends Forma {
        altura: number;
        largura: number;

        calcularVolume(): number {
            console.error('Não tenho volume!');
            return 0;
        }
    }
    ```
    Como "Retângulo" não possui volume, a hierarquia de herança se torna problemática.

### 5. Nos exemplos que você citou, a composição seria mais aplicável? Refaça-os.
    ```typescript
    interface PassaroQueVoa {
        voar(): void;
    }
    class Pinguim implements PassaroQueVoa {
        voar(): void {
            // Pinguins não podem voar, mas ainda herdaram de Pássaro
            console.log('Eu não posso voar!');
        }
    }

    interface Forma2D {
        calcularArea(): number;
    }

    class Retangulo implements Forma2D {
        altura: number;
        largura: number;

        calcularArea(): number {
            return this.altura * this.largura;
        }
    }
    ```
    Ao usar composição, as classes são compostas por objetos de outras classes, tornando a relação mais flexível e evitando as limitações associadas à herança.