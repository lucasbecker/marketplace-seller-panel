# Marketplace Seller Panel

> Um projeto de estudo e prática com Angular, desenvolvido para simular um painel de gerenciamento de produtos.

O objetivo é aplicar conceitos modernos do framework em um cenário realista, reforçando boas práticas de organização, escalabilidade e integração com backend.

Durante o desenvolvimento deste projeto, foi colocado em prática conceitos essenciais:

- Organização e arquitetura Angular

  - Estruturação de módulos, componentes e serviços para garantir escalabilidade e manutenção.

- Formulários Reativos (Reactive Forms)

  - Criação de formulários dinâmicos, robustos e com validações avançadas.

- Gerenciamento de estado e fluxo de dados com RxJS

  - Uso de Observables para lidar com chamadas assíncronas e estados da aplicação.

- Integração com Backend

  - Consumo de API REST simulada (Express + JSON Server), com autenticação, CRUD de produtos e filtros.

- Boas práticas de segurança e UX

  - Guards para proteger rotas
  - Tratamento de erros no frontend
  - Autenticação de usuários

- Estilização moderna com Tailwind CSS
  - Aplicação de classes utilitárias para construção rápida e responsiva da interface.

## Descrição do Projeto

O Marketplace Seller Panel é uma aplicação frontend completa que simula um sistema de gestão de produtos para vendedores.

### Funcionalidades implementadas:

- **Autenticação de usuários** (login com proteção de rotas).
- **Listagem de produtos** com filtros por título e status.
- **Criação de produtos** via formulários reativos.
- **Edição e visualização de produtos**.
- **Integração com backend** utilizando requisições HTTP.

> Ao final, você terá um painel funcional pronto para adicionar ao seu portfólio como exemplo de aplicação profissional em Angular.

## Como Executar os Projetos

O repositório contém dois projetos: frontend (Angular) e backend (Express).

### Backend (Express)

```bash
  cd backend
  npm install
  npm run dev
  # Servidor em http://localhost:3000
```

### Frontend (Angular)

```bash
  cd frontend
  npm install
  ng serve
  # Aplicação em http://localhost:4200
```

## Requisitos

Certifique-se de que as seguintes ferramentas estão instaladas em seu ambiente para que os projetos funcionem corretamente:

- **Node.js**: Versão 22.19.0 (LTS)
- **Angular CLI**: Versão 20
- **Insomnia**
- **Visual Studio Code (VS Code)**

### Extensões recomendadas do VS Code

- **Angular Language Service**: Autocompletar, dicas e suporte avançado ao desenvolvimento Angular
- **Tailwind CSS IntelliSense**: Autocompletar e validação para classes do Tailwind CSS
