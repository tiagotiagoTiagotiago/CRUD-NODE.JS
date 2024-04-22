
# CRUD 

Este é um projeto de exemplo de um aplicativo CRUD (Create, Read, Update, Delete) utilizando Node.js e MongoDB. Ele permite criar, visualizar, editar e excluir usuários de um banco de dados MongoDB.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes tecnologias instaladas em sua máquina:

- Node.js: [Instalação do Node.js](https://nodejs.org/)
- MongoDB: [Instalação do MongoDB](https://docs.mongodb.com/manual/installation/)

## Instalação

1. Clone este repositório em sua máquina local usando o Git:

   ```
   git clone https://github.com/tiagotiagoTiagotiago/CRUD-NODE.JS.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd crud-mongodb
   ```

3. Instale as dependências do projeto usando npm:

   ```
   npm install
   ```

4. Renomeie o arquivo `.env.example` para `.env` e configure as variáveis de ambiente conforme necessário:

   ```
   MONGO_HOST=mongodb://localhost:27017
   MONGO_DATABASE=tiagotools
   ```

## Banco de Dados

Este aplicativo utiliza o MongoDB como banco de dados. Certifique-se de ter um servidor MongoDB em execução e configurado corretamente. O arquivo `.env` contém as informações de conexão com o banco de dados.

## Uso

1. Inicie o servidor:

   ```
   npm start
   ```

2. Abra o navegador e acesse o aplicativo em:

   ```
   http://localhost:3000
   ```

3. Você verá uma interface simples onde pode listar, adicionar, editar e excluir usuários.

## Dependências

- [Express](https://www.npmjs.com/package/express): Framework web para Node.js.
- [MongoDB](https://www.npmjs.com/package/mongodb): Driver oficial do MongoDB para Node.js.
- [bcrypt](https://www.npmjs.com/package/bcrypt): Biblioteca para hash de senhas.
- [dotenv](https://www.npmjs.com/package/dotenv): Carrega variáveis de ambiente de um arquivo `.env`.
- [EJS](https://www.npmjs.com/package/ejs): Engine de visualização embutida para JavaScript.

