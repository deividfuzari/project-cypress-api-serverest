🧪 Project Cypress API & UI – Serverest
Automação de testes da API e da interface gráfica da aplicação Serverest utilizando Cypress.
O projeto conta com integração contínua via GitHub Actions e envio de notificações para o Slack.

📑 Sumário
📝 Sobre o projeto

🚀 Pré-requisitos

📦 Instalação

📁 Estrutura do projeto

▶️ Como rodar os testes

🔁 CI/CD

🔔 Integração com Slack

🤝 Contribuindo

📄 Licença

📝 Sobre o projeto
Este repositório tem como objetivo automatizar testes:

API REST do Serverest (login, usuários, produtos, carrinhos)

Interface (UI) com navegação, formulários e validações

Além disso, conta com:

Workflows separados para testes de API e UI (api.yml, e2e.yml)

Notificações para Slack informando o status da execução

Organização por Page Objects para testes de interface

🚀 Pré-requisitos
Node.js v16+

npm (ou yarn)

Webhook do Slack configurado

Cypress instalado global/localmente

📦 Instalação
bash
Copiar
Editar
git clone https://github.com/deividfuzari/project-cypress-api-ui-serverest.git
cd project-cypress-api-ui-serverest
npm install
📁 Estrutura do projeto
bash
Copiar
Editar
.github/
└── workflows/
    ├── api.yml             # Workflow para testes de API
    └── e2e.yml             # Workflow para testes de UI

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
│   └── example.json       # Dados mockados
│
├── support/
│   ├── commands.js        # Comandos customizados
│   └── e2e.js             # Setup global dos testes

cypress.config.js          # Configurações do Cypress
package.json               # Scripts de execução e dependências
▶️ Como rodar os testes
O package.json já contém scripts prontos para facilitar a execução:

🔌 Testes de API
bash
Copiar
Editar
npm run test-api
Esse comando executa todos os arquivos .cy.js dentro da pasta cypress/api usando o repórter mochawesome.

💻 Testes de UI
bash
Copiar
Editar
npm run test-ui
Esse comando executa a spec de interface serverest-ui.cy.js.

📂 Scripts no package.json
json
Copiar
Editar
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  "test-ui": "cypress run --spec cypress/e2e/spec/serverest-ui.cy.js --reporter mochawesome",
  "test-api": "cypress run --spec cypress/api/*.cy.js --reporter mochawesome"
}
🔁 CI/CD
O projeto possui dois workflows de integração contínua separados:

.github/workflows/api.yml: roda testes de API

.github/workflows/e2e.yml: roda testes de UI

Ambos são executáveis via workflow_dispatch ou em eventos como push/pull_request. Os passos incluem:

Instalação de dependências

Execução dos testes

Geração de relatórios

Notificação no Slack

🔔 Integração com Slack
O workflow inclui envio de mensagens para o canal do Slack com:

Status da execução (:white_check_mark: ou :x:)

Link para logs (se aplicável)

Cor e usuário configuráveis

Exemplo de uso da action no GitHub:

yaml
Copiar
Editar
- name: Slack - Início dos testes
  uses: rtCamp/action-slack-notify@v2.2.0
  if: always()
  env:
    SLACK_CHANNEL: notification-tests
    SLACK_USERNAME: qas
    SLACK_COLOR: '#1e81b0'
    SLACK_WEBHOOK: ${{ secrets.SLACK_WEBHOOK }}
    MSG_MINIMAL: true
🤝 Contribuindo
Faça um fork

Crie uma branch com sua feature: git checkout -b minha-feature

Commit suas mudanças: git commit -m 'feat: nova funcionalidade'

Push para o seu fork: git push origin minha-feature

Crie um Pull Request

📄 Licença
MIT © Deivid Fuzari



# new-project-api-ui-serverest

 Projeto cypress para testar API e UI do site serverest : https://serverest.dev/

 Utilizando integração com o slack para receber notificações de resultados dos testes.

![image](https://github.com/user-attachments/assets/6d0cdf2d-19fd-4f56-bd92-3c318b9ab58e)


_______________________________________________________________________________________________

Testes de API utilizando o swagger do severest.

 Carrinho
 
![image](https://github.com/user-attachments/assets/602272cb-376f-434e-b825-4aae181e088e)

Login

![image](https://github.com/user-attachments/assets/bfcc10a6-ad3b-4d13-afd7-2b9b7420b1ae)

Produtos

![image](https://github.com/user-attachments/assets/f2eb0138-0dcc-4cb9-b71d-0ef196610962)

Usuarios

![image](https://github.com/user-attachments/assets/6331d656-d3f3-4375-93dc-a52fa50f366f)

_______________________________________________________________________________________________

Testes de UI, fluxos de um usuario admin e normal.

![image](https://github.com/user-attachments/assets/2f9c438b-20d5-421c-bcec-fdaf5205a059)


