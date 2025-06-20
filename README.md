# 🧪 Project Cypress API & UI – Serverest

![API Workflow](https://github.com/deividfuzari/project-cypress-api-ui-serverest/actions/workflows/api.yml/badge.svg)
![E2E Workflow](https://github.com/deividfuzari/project-cypress-api-ui-serverest/actions/workflows/e2e.yml/badge.svg)

Automação de testes da API e da interface gráfica da aplicação [Serverest](https://serverest.dev/) utilizando Cypress.  
O projeto conta com integração contínua via GitHub Actions e envio de notificações para o Slack.

---

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar os testes](#como-rodar-os-testes)
- [CI/CD](#cicd)
- [Integração com Slack](#integração-com-slack)
- [Contribuindo](#contribuindo)
- [Licença](#licença)


---

## Sobre o projeto

Este repositório tem como objetivo automatizar testes:

- ✅ API REST do Serverest (login, usuários, produtos, carrinhos)
- ✅ Interface (UI) com navegação, formulários e validações

Além disso, conta com:

- Workflows separados para testes de API e UI (`api.yml`, `e2e.yml`)
- Notificações para Slack informando o status da execução
- Organização por Page Objects para testes de interface

---

## Pré-requisitos

- Node.js v16+
- npm (ou yarn)
- Webhook do Slack configurado
- Cypress instalado localmente

---

## Instalação

```bash
git clone https://github.com/deividfuzari/project-cypress-api-ui-serverest.git
cd project-cypress-api-ui-serverest
npm install
```

---

## Estrutura do Projeto

```bash

.github/
└── workflows/
    ├── api.yml             # Workflow para testes de API (manual criada por mim)
    └── e2e.yml             # Workflow para testes de UI (padrão Cypress.io)

cypress/
├── api/                    # Testes de API
│   ├── carrinhos.api.cy.js
│   ├── login.api.cy.js
│   ├── produtos.api.cy.js
│   └── usuarios.api.cy.js
│
├── e2e/
│   ├── pages/              # Page Objects para testes de UI
│   │   ├── home/
│   │   │   ├── home.page.js
│   │   │   └── home.elements.js
│   │   ├── login/
│   │   │   ├── login.page.js
│   │   │   └── login.elements.js
│   │   ├── product/
│   │   │   ├── product.page.js
│   │   │   └── product.elements.js
│   │   └── user/
│   │       ├── user.page.js
│   │       └── user.elements.js
│   │
│   └── spec/
│       └── serverest-ui.cy.js  # Spec principal de UI
│
├── fixtures/
│   └── example.json

├── support/
│   ├── commands.js  # Onde armazenei os metodos de API
│   └── e2e.js

cypress.config.js
package.json
```

---

## Como rodar os testes
O package.json já contém scripts prontos para facilitar a execução:

🔌 Testes de API
```bash
npm run test-api
```
Executa todos os arquivos .cy.js da pasta cypress/api com o repórter mochawesome.

💻 Testes de UI
```bash
npm run test-ui
```
Executa a spec serverest-ui.cy.js com o repórter mochawesome.

📂 Scripts disponíveis
```json
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "test-ui": "cypress run --spec cypress/e2e/spec/serverest-ui.cy.js --reporter mochawesome",
  "test-api": "cypress run --spec cypress/api/*.cy.js --reporter mochawesome"
}
```

---

## CI/CD

O projeto utiliza GitHub Actions com dois workflows independentes para testes de API e UI, ambos configurados com workflow_dispatch — ou seja, executados manualmente conforme sua escolha.

Essa abordagem proporciona maior controle, evitando execuções automáticas desnecessárias a cada push.

⚙️ Workflows disponíveis
✅ api.yml – Testes de API (estrutura personalizada por mim)
Este workflow foi construído de forma manual, com uma sequência explícita de etapas. A ideia é manter maior controle sobre o ambiente e a execução, instalando dependências passo a passo.

Etapas principais:

```yaml

- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 18

- name: Checkout code
  uses: actions/checkout@v4

- name: Install dependencies
  run: npm install

- name: Run Cypress API tests
  run: npx cypress run --spec "cypress/api/*.cy.js" --record
  env:
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```
🔎 Objetivo: Executar os testes de API localizados em cypress/api/, com granularidade na configuração.

e2e.yml – Testes de UI (seguindo padrão Cypress.io)
Este workflow segue a estrutura sugerida pela própria equipe do Cypress.io, utilizando a action oficial cypress-io/github-action, que simplifica diversas tarefas automaticamente.

Etapas principais:

```yaml

- name: Checkout
  uses: actions/checkout@v4

- name: Cypress run
  uses: cypress-io/github-action@v6
  with:
    start: npx cypress run
    spec: cypress/e2e/spec/serverest-ui.cy.js
    wait-on: 'https://serverest.dev/'
    record: true
    parallel: false
  env:
    CYPRESS_RECORD_KEY: ${{ secrets.CYPRESS_RECORD_KEY }}
```
🔎 Objetivo: Executar os testes de interface presentes em cypress/e2e/spec/serverest-ui.cy.js com suporte a espera do ambiente remoto (wait-on) e integração simplificada com Cypress Dashboard (opcional).

💡 Ambos os workflows contam com envio de notificações para o Slack, informando início e término das execuções (com status de sucesso ou falha).

---


