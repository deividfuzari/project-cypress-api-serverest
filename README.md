# 🧪 Project Cypress API & UI – Serverest

![API Workflow](https://github.com/deividfuzari/project-cypress-api-ui-serverest/actions/workflows/api.yml/badge.svg)
![E2E Workflow](https://github.com/deividfuzari/project-cypress-api-ui-serverest/actions/workflows/e2e.yml/badge.svg)

Automação de testes da API e da interface gráfica da aplicação [Serverest](https://serverest.dev/) utilizando Cypress.  
O projeto conta com integração contínua via GitHub Actions e envio de notificações para o Slack.

---

## 📑 Sumário

- [📝 Sobre o projeto](#📝-sobre-o-projeto)
- [🚀 Pré-requisitos](#🚀-pré-requisitos)
- [📦 Instalação](#📦-instalação)
- [📁 Estrutura do projeto](#📁-estrutura-do-projeto)
- [▶️ Como rodar os testes](#️-como-rodar-os-testes)
- [🔁 CI/CD](#🔁-cicd)
- [🔔 Integração com Slack](#🔔-integração-com-slack)
- [🤝 Contribuindo](#🤝-contribuindo)
- [📄 Licença](#📄-licença)

---

## 📝 Sobre o projeto

Este repositório tem como objetivo automatizar testes:

- ✅ API REST do Serverest (login, usuários, produtos, carrinhos)
- ✅ Interface (UI) com navegação, formulários e validações

Além disso, conta com:

- Workflows separados para testes de API e UI (`api.yml`, `e2e.yml`)
- Notificações para Slack informando o status da execução
- Organização por Page Objects para testes de interface

---

## 🚀 Pré-requisitos

- Node.js v16+
- npm (ou yarn)
- Webhook do Slack configurado
- Cypress instalado localmente

---

## 📦 Instalação

```bash
git clone https://github.com/deividfuzari/project-cypress-api-ui-serverest.git
cd project-cypress-api-ui-serverest
npm install




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


