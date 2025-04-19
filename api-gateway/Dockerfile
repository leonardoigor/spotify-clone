# Etapa 1: Usar a imagem oficial do Golang para compilar o código
FROM golang:1.24.2 AS builder

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar os arquivos Go para o container
COPY . .

# Baixar as dependências
RUN go mod tidy

# Compilar o código Go
RUN go build -o api-gateway

# Etapa 2: Usar uma imagem mais leve para rodar o binário
FROM debian:bookworm-slim

# Diretório de trabalho dentro do container
WORKDIR /app

# Copiar o binário compilado da etapa anterior
COPY --from=builder /app/api-gateway .

# Expor a porta (ajuste se necessário)
EXPOSE 8000

# Comando para rodar o binário compilado
CMD ["/app/api-gateway"]
