# Estágio 1: Build do app React
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Estágio 2: Servir os arquivos estáticos com Nginx
FROM nginx:stable-alpine

# Copia os arquivos estáticos construídos no estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Copia uma configuração customizada do Nginx, se necessário
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expõe a porta 80
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
