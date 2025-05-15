# Test SPS Project

## Pré-requisitos

Antes de começar, você precisa ter instalado:
1. Node.js (versão 14 ou superior)
   - Baixe em: https://nodejs.org/
2. Yarn (gerenciador de pacotes)
   - Após instalar o Node.js, execute no terminal:
   ```bash
   npm install -g yarn
   ```

## Variáveis de ambiente

O projeto utiliza variáveis de ambiente para configuração. Para configurá-las:

1. No servidor (pasta `server`):
   - Copie o arquivo `.env.example` para `.env`:
   ```bash
   # No Linux/Mac:
   cp .env.example .env
   
   # No Windows (PowerShell):
   Copy-Item .env.example .env
   
   # No Windows (CMD):
   copy .env.example .env
   ```
   - Configure as seguintes variáveis:
     - `PORT`: Porta do servidor (padrão: 3000)
     - `JWT_SECRET`: Chave secreta para JWT (obrigatório)

2. No cliente (pasta `client`):
   - Copie o arquivo `.env.example` para `.env`:
   ```bash
   # No Linux/Mac:
   cp .env.example .env
   
   # No Windows (PowerShell):
   Copy-Item .env.example .env
   
   # No Windows (CMD):
   copy .env.example .env
   ```
   - Configure a variável:
     - `REACT_APP_SERVER_URL`: URL do servidor (padrão: http://localhost:3000)

Para configurar todas as variáveis de ambiente de uma vez, execute:
```bash
# No Linux/Mac:
yarn setup-env

# No Windows (PowerShell):
yarn setup-env-win
```

## Instalação e Execução

1. Clone o repositório
2. Na pasta raiz do projeto, execute:
```bash
yarn setup
```

Este comando irá:
- Instalar todas as dependências do projeto
- Iniciar o servidor na porta 3000
- Iniciar o cliente na porta 8000

Após a execução, você poderá acessar a aplicação em:
- Cliente: http://localhost:8000

## Comandos Disponíveis

- `yarn setup`: Instala todas as dependências e inicia o projeto
- `yarn setup-env`: Configura as variáveis de ambiente (Linux/Mac)
- `yarn setup-env-win`: Configura as variáveis de ambiente (Windows)
- `yarn dev`: Inicia o cliente e servidor (apenas se as dependências já estiverem instaladas)
- `yarn client`: Inicia apenas o cliente
- `yarn server`: Inicia apenas o servidor
