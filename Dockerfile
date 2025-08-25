# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copia os arquivos de manifesto de pacotes da pasta backend
COPY backend/package*.json ./

# Instala todas as dependências
RUN npm install

# Copia todo o código-fonte da pasta backend
COPY backend/. .

# --- COMANDOS DE DEBUG ---
# Vamos listar o que está na pasta principal do app para ver se o tsconfig.json foi copiado
RUN echo "DEBUG: Listando conteúdo de /usr/src/app" && ls -la

# Vamos listar o que está dentro da pasta 'src'
RUN echo "DEBUG: Listando conteúdo de /usr/src/app/src" && ls -la src

# Vamos listar o que está dentro da pasta 'src/auth' para confirmar os DTOs e strategies
RUN echo "DEBUG: Listando conteúdo de /usr/src/app/src/auth" && ls -la src/auth

# Vamos listar o que está dentro da pasta 'src/users'
RUN echo "DEBUG: Listando conteúdo de /usr/src/app/src/users" && ls -la src/users
# --- FIM DOS COMANDOS DE DEBUG ---

# Gera o cliente Prisma
RUN npx prisma generate

# Compila a aplicação DIRETAMENTE com o TypeScript Compiler
RUN npx tsc --project tsconfig.json

# ---
# Estágio 2: Criação da imagem de produção final
FROM node:18-alpine

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --only=production

COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3000

CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
