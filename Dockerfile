# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copia package.json e instala dependências
COPY backend/package*.json ./
RUN npm install

# Copia o restante do código
COPY backend/. .

# Gera o cliente Prisma
RUN npx prisma generate

# Compila a aplicação
RUN npm run build

# Estágio 2: Produção
FROM node:18-alpine

WORKDIR /usr/src/app

# Copia package.json e instala apenas dependências de produção
COPY --from=builder /usr/src/app/package*.json ./
RUN npm install --only=production

# Copia artefatos da build e schema do Prisma
COPY --from=builder /usr/src/app/dist ./dist
COPY --from=builder /usr/src/app/prisma ./prisma
COPY --from=builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

EXPOSE 3000

CMD ["npm", "run", "start:migrate"]


