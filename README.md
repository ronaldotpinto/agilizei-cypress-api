# Canal Agilizei - Pair Testing #02 - Testes de API com Cypress

[Pair Testing #02 - Testes de API com Cypress](https://youtu.be/rbObfNh2bno)

## Ferramentas utilizadas

- [VSCode](https://code.visualstudio.com/ "VSCode")
- [Cypress](https://www.npmjs.com/package/cypress "Cypress")
- [Mochawesome](https://www.npmjs.com/package/mochawesome "Mochawesome")

## Estrutura de pastas

```bash
└───cypress
    ├───fixtures
    ├───integration
    │   └───services
    │       └───Books
    │           ├───payloads
    │           ├───requests
    │           └───tests
    ├───plugins
    └───support
```

## Instalação e execução

- Em um terminal, dentro da pasta do projeto, execute o seguinte comando:
  - Este comando instalará todas as dependencias  

```bash
npm install -D
```

### Scripts

- Rodar os testes via interface do Cypress:

```bash
npm run cypress:open
```

- Rodar os testes via terminal:

```bash
npm run cypress:run
```

- Gerar o relatório em html:

  - O relatório será gerado na pasta 'mochawesome-report'

```bash
npm run report:merge
npm run report:mocha
```

- Limpar arquivos relacionados ao relatório:

```bash
npm run report:clean
```

- Rodar os testes via terminal e gerar o relatório:

```bash
npm test
```
