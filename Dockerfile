# Usar uma imagem base do Node.js
FROM node:20

# Definir o diretório de trabalho no container
WORKDIR /usr/src/app

# Copiar o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instalar as dependências do projeto
RUN npm install

# Copiar todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Expor a porta em que o servidor estará rodando
EXPOSE 3000

# Comando para rodar o servidor
CMD ["node", "server.js"]
