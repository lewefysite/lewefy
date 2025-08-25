# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
# Força a instalação de TODAS as dependências, incluindo as de desenvolvimento
RUN npm install

# Copia todo o código-fonte
COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# ---
# Estágio 2: Criação da imagem de produção final
FROM node:18-alpine

WORKDIR /usr/src/app

# Copia os manifestos de pacote da etapa anterior
COPY --from=builder /usr/src/app/package*.json ./

# Instala APENAS as dependências de produção.
RUN npm install --only=production

# Copia os artefatos da compilação, o schema do prisma e o cliente prisma gerado.
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação já compilada com migrações
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main"]


