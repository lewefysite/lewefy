# Estágio 1: Build da aplicação
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

COPY backend/package*.json ./
RUN npm install

COPY backend/. .

RUN npx prisma generate
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
