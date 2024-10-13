<h1 align="center">
Notifications Service | Ignite-Lab - NodeJS
</h1>

<h4 align="center">
  <div>
    <img alt="Logo" title="#logo" src="public/ignite-lab.svg" width="200"/>
  <div>
</h4>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades-do-projeto">Funcionalidades do projeto</a> •
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-endpoints">Endpoints</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

<p align="justify">
Aplicação desenvolvida com base nos princípios de TDD (Test-Driven Development), DDD (Domain-Driven Design) e arquitetura limpa, utilizando o framework NestJs. O NestJs, inspirado em bibliotecas como Angular e Vue, foca em injeção e inversão de dependência, promovendo alta produtividade e uma boa experiência para o desenvolvedor.
</p>

<p align="justify">
Para a comunicação com o banco de dados, foi utilizado o TypeORM Prisma, uma API flexível e adaptável para diferentes cenários, como REST APIs, CLIs, microservices e GraphQL APIs.
</p>

## 🔨 Funcionalidades do projeto

- `Listar notificações`: Retorna todas as notificações registradas no banco por recipiente id.
- `Criar notificações`: Registra novas notificações.
- `Cancelar notificações`: Cancelar notificações registrada.
- `Contador de notificações`: Conta quantas notificações registrada.
- `Ler e não de notificações`:Possibilidade de marcar uma notificação como lida ou deixá-la como não lida.

## 🛠 Tecnologias

<p align="justify">Este projeto utiliza um conjunto de tecnologias modernas para garantir uma aplicação eficiente e escalável, incluindo:</p>

  * [Node.js](https://nodejs.org/en/)
  * [Nest.js](https://docs.nestjs.com/)
  * [Prisma](https://www.prisma.io/)
  * [Typescript](https://www.typescriptlang.org/)
  * [Jest](https://jestjs.io/)
  * [Redis](https://redis.io/)

## 🚀 Como executar o projeto

### Pré-requisitos

<p align="justify">Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:</p>

```bash
npm i -g @nestjs/cli
```

<a href="https://skillicons.dev">
  <img src="https://skillicons.dev/icons?i=git,nodejs,vscode" />
</a>

### Clone o repositório

```bash
# Clone este repositório
$ git clone <https://github.com/Gelzieny/notifications-service.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd notifications-service
```

### 🎲 Rodando o Back-End (servidor)

```bash

# Instale as dependências
$ yarn install

# Gerar o código TypeScript com base nos modelos do Prisma:
  $ npx prisma generate

# Aplicar migrações ao banco de dados:
  $ npx prisma migrate dev

# Execute a aplicação em modo de desenvolvimento
$ yarn start:dev

# Executar testes:
$ yarn test:watch

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>
```
## ⚙️ Endpoints

### 1. Criar notificações
- **Método**: POST
- **URL**: `/notifications`
- **Corpo**:
  ```json
  {
    "content": "string",
    "category": "string",
    "recipientId": "string"
  }

### 2. Cancelar notificações
- **Método**: PTCH
- **URL**: `/notifications/id/cancel`

### 3. Contador de notificações
- **Método**: GET
- **URL**: `/notifications/count/from/:recipientId`

### 4. Consultar de notificações por recipientId
- **Método**: GET
- **URL**: `/notifications/from/:recipientId`

### 5. Ler notificações
- **Método**: PTCH
- **URL**: `/notifications/id/read`

### 6. Não ler notificações
- **Método**: PTCH
- **URL**: `/notifications/id/unread`

## 🧑🏻‍💻 Autor

Feito com ❤️ por Gelzieny R. Martins 👋🏽 [Entre em contato!](https://www.linkedin.com/in/gelzieny/)

## 📝 Licença

Este projeto esta sobe a licença [MIT](./LICENSE).