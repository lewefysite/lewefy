# Lewefy - Seu Espaço de Acolhimento

Este é o repositório oficial do projeto Lewefy, uma plataforma segura e sem julgamentos para você expressar seus sentimentos, aliviar a mente e encontrar conforto.

## 🚀 Tecnologias Utilizadas

- **Frontend:** React, Vite, Tailwind CSS, React Router
- **Backend:** NestJS, Prisma, TypeScript
- **Banco de Dados:** PostgreSQL
- **Infraestrutura:** Docker, Docker Compose, Traefik (Proxy Reverso)

## 📋 Pré-requisitos

- [Docker](https://www.docker.com/get-started)
- [Docker Compose](https://docs.docker.com/compose/install/)

## ⚙️ Configuração do Ambiente

Antes de iniciar a aplicação, você precisa configurar as variáveis de ambiente.

1.  **Crie o arquivo de ambiente do backend:**
    Na raiz do projeto, crie um arquivo chamado `.env`. Ele será usado pelo `docker-compose`.

    ```bash
    cp .env.example .env
    ```
    *Obs: Você precisará criar o arquivo `.env.example` primeiro, ou simplesmente criar o `.env` com o conteúdo abaixo.*

2.  **Preencha o arquivo `.env` com os seguintes valores:**

    ```env
    # Configurações do Banco de Dados
    DB_USER=lewefy
    DB_PASSWORD=secretpassword
    DB_NAME=lewefy
    DB_HOST=database
    DB_PORT=5432
    DATABASE_URL="postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?schema=public"

    # Segredos da Aplicação
    JWT_SECRET=seu-segredo-super-secreto-para-jwt
    ```

## ▶️ Executando o Projeto

Com o Docker e o Docker Compose instalados e o arquivo `.env` configurado, siga os passos:

1.  **Construa e inicie os contêineres:**

    ```bash
    docker-compose up -d --build
    ```

2.  **Execute as migrações do banco de dados (primeira vez):**
    O comando `start:migrate` no backend já tenta fazer isso, mas se precisar rodar manualmente:

    ```bash
    docker-compose exec backend npx prisma migrate dev
    ```

3.  **Acesse a aplicação:**
    - **Frontend:** [http://lewefy.localhost](http://lewefy.localhost)
    - **Backend API:** [http://lewefy.localhost/api](http://lewefy.localhost/api) (Ex: `GET http://lewefy.localhost/api/users`)
    - **Dashboard do Traefik:** [http://localhost:8080](http://localhost:8080)

## ⏹️ Parando o Projeto

Para parar todos os contêineres, execute:

```bash

docker-compose down
update
