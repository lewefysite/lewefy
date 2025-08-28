# =======================
# Estágio 1: Build do FRONTEND
# =======================
FROM node:18-alpine AS frontend-builder

WORKDIR /app/frontend

# Instala dependências do frontend
COPY frontend/package*.json ./
RUN npm install

# Copia código do frontend
COPY frontend/ ./

# Builda o frontend para produção
RUN npm run build


# =======================
# Estágio 2: Build do BACKEND
# =======================
FROM node:18-alpine AS backend-builder

WORKDIR /usr/src/app

# Instala dependências do backend
COPY backend/package*.json ./
RUN npm install

# Copia código do backend
COPY backend/ ./

# Gera cliente Prisma e compila TypeScript
RUN npx prisma generate
RUN npx tsc --project tsconfig.json


# =======================
# Estágio 3: Imagem FINAL de produção
# =======================
FROM node:18-alpine

WORKDIR /usr/src/app

# Copia package.json e instala apenas dependências de produção
COPY --from=backend-builder /usr/src/app/package*.json ./
RUN npm install --only=production

# Copia arquivos compilados do backend
COPY --from=backend-builder /usr/src/app/dist ./dist
COPY --from=backend-builder /usr/src/app/prisma ./prisma
COPY --from=backend-builder /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Copia build do frontend para servir pelo backend
COPY --from=frontend-builder /app/frontend/dist ./dist/public

# Expõe porta da API
EXPOSE 3000

# Comando de inicialização
CMD ["sh", "-c", "npx prisma migrate deploy && node dist/main.js"]
