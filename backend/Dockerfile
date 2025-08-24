# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Gera o cliente Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Estágio 2: Criação da imagem de produção
FROM node:18-alpine

WORKDIR /usr/src/app

# Copia dependências de produção
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --only=production

# Copia os artefatos da compilação e o schema do prisma
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma


# Expõe a porta que a aplicação vai rodar
EXPOSE 3000

# Comando para rodar a aplicação com migrações
CMD ["npm", "run", "start:migrate"]