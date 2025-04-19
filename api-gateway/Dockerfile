# Etapa 1: Build
FROM golang:1.21 AS builder

WORKDIR /app

# Copia os arquivos go mod e sum para cache
# COPY go.mod go.sum ./
# RUN go mod download

# Copia o código-fonte
COPY . .

# Compila o binário (para o Linux, estático)
# RUN CGO_ENABLED=0 GOOS=linux go build -o app

# Etapa 2: Imagem final enxuta
FROM alpine:latest

WORKDIR /app

# Copia o binário da etapa de build
# COPY --from=builder /app/app .

# Define porta (opcional)
EXPOSE 3000

# Comando padrão
# CMD ["./app"]
