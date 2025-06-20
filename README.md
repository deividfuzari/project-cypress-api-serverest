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
│   ├── commands.js
│   └── e2e.js

cypress.config.js
package.json
```

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

