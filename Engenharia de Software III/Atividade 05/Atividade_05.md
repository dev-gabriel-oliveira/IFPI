### INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ
#### Aluno: Gabriel Oliveira Rodrigues
#### Curso: ADS
#### Disciplina: Engenharia de Software III
#### Professor: Ely

<hr />

## Atividade 05 (Respostas)

### Questão 1.
A herança entre "ContaBancaria" e "ContaPoupanca" é problemática, isso porque a classe ContaPoupanca adiciona uma restrição específica para saques maiores que 1000. O princípio da substituição de Liskov afirma que objetos de uma classe derivada devem poder substituir objetos da classe base sem afetar a corretude do programa. A restrição de saque na classe derivada viola esse princípio.
<a href="Questao_01.ts">Possível Solução</a>

### Questão 2.
<a href="Questao_02.ts">Possível Solução</a>

### Questão 3.
<a href="Questao_03.ts">Possível Solução</a>

### Questão 4.
Exemplo errado:
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
<a href="Questao_04.ts">Possível Solução</a>

### Questão 5.
<a href="Questao_05.ts">Possível Solução</a>