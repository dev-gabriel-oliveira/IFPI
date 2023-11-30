### INSTITUTO FEDERAL DE EDUCAÇÃO, CIÊNCIA E TECNOLOGIA DO PIAUÍ
#### Aluno: Gabriel Oliveira Rodrigues
#### Curso: ADS
#### Disciplina: Engenharia de Software III
#### Professor: Ely Miranda

<hr />

## Atividade 06 (Respostas)

### Questão 1.
A principal imagem relacionada ao Interface Segregation Principle muitas vezes é ilustrada com uma representação visual de uma interface grande e abrangente sendo dividida em interfaces menores e mais específicas. A ideia é transmitir a noção de que uma interface não deve forçar implementações de métodos desnecessários para as classes que a implementam.

### Questão 2.
O ISP sugere que uma classe não deve ser forçada a implementar interfaces que ela não usa. A razão fundamental é evitar que uma classe seja sobrecarregada com a implementação de métodos que não são relevantes para a sua funcionalidade. Isso promove uma maior coesão e evita acoplamentos desnecessários entre classes e interfaces.

### Questão 3.
Sim, há uma correlação entre o ISP e o SRP. O SRP afirma que uma classe deve ter apenas uma razão para mudar, ou seja, deve ter uma única responsabilidade. O ISP leva essa ideia para interfaces, argumentando que uma interface deve ter um único "foco" e não deve impor métodos não correlatos às classes que a implementam. Portanto, a ideia central é que tanto classes quanto interfaces devem ter uma única responsabilidade, evitando assim a criação de entidades que são sobrecarregadas com funcionalidades não relacionadas.

### Questão 4.
#### A.
Se uma interface contém métodos que não são relevantes para uma classe específica (cliente), isso cria uma dependência desnecessária. Seguindo o ISP, as interfaces devem ser projetadas de forma que os clientes possam depender apenas dos métodos que são relevantes para suas necessidades específicas.

#### B.
O ISP argumenta que as classes devem implementar apenas as interfaces que são relevantes para suas funcionalidades. Forçar uma classe a implementar uma interface com métodos que ela não utiliza viola esse princípio, pois introduz uma carga desnecessária e potencialmente prejudicial para a classe.

### Questão 5.
A principal imagem associada ao DIP muitas vezes é representada por uma seta invertida, simbolizando a inversão da direção da dependência. Em vez de as camadas mais altas dependerem diretamente das camadas mais baixas, a seta aponta para cima, indicando que as camadas mais altas dependem de abstrações, e as implementações concretas dependem dessas abstrações. A ideia é inverter a direção da dependência, promovendo uma arquitetura mais flexível e menos acoplada.

### Questão 6.
Seguindo o DIP, em vez de depender de implementações concretas, os desenvolvedores devem depender de interfaces ou abstrações.
Isso proporciona flexibilidade, pois as implementações concretas podem ser trocadas sem afetar as partes do código que dependem das interfaces.

### Questão 7.
```typescript
interface Database {
  connect(): void;
  query(query: string): void;
}

class MongoDB implements Database {
  connect() {
    console.log('Conectando ao MongoDB...');
  }

  query(query: string) {
    console.log(`Executando query no MongoDB: ${query}`);
  }
}

class UserService {
  private database: Database;

  constructor(database: Database) {
    this.database = database;
  }

  getUser(userId: string): void {
    this.database.query(`SELECT * FROM users WHERE id = ${userId}`);
    // Lógica adicional para obter usuário
  }
}
```
Supondo que precisemos mudar para um banco de dados PostgreSQL. Se não aplicarmos o Dependency Inversion Principle, teríamos que modificar diretamente a implementação do UserService, o que pode causar impactos em outros módulos.

### Questão 8.
O Dependency Inversion Principle sugere que as camadas de alto nível não devem depender diretamente das camadas de baixo nível, mas ambas devem depender de abstrações. No caso do Symfony e do padrão Repository, isso se traduz no fato de que as classes de alto nível (como os serviços ou controladores que precisam acessar o banco de dados) não dependem diretamente de implementações concretas de consultas ao banco de dados.

### Questão 9.
Sim, o Dependency Inversion Principle (DIP) geralmente é considerado um dos princípios SOLID que deve ser aplicado cedo durante o desenvolvimento. Sua aplicação proporciona uma base sólida para a criação de sistemas flexíveis, extensíveis e de fácil manutenção, reduzindo o acoplamento entre diferentes partes do código.

### Questão 10.
Sim, geralmente, se começarmos aplicando os quatro primeiros princípios SOLID (Single Responsibility Principle, Open/Closed Principle, Liskov Substitution Principle, Interface Segregation Principle), o Dependency Inversion Principle (DIP) estaria naturalmente favorecido e frequentemente já estaria implementado. Esses princípios, quando seguidos, tendem a promover a inversão da dependência como parte integrante da estrutura do código.