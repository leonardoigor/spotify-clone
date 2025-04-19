package main

import (
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"strings"
)

func main() {
	http.Handle("/users/", reverseProxy("http://localhost:5500"))
	http.Handle("/products/", reverseProxy("http://localhost:3002"))
	http.HandleFunc("/get", getHandler) // Adicionando o endpoint GET

	log.Println("API Gateway rodando na porta 8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

// Função para manipular as requisições GET
func getHandler(w http.ResponseWriter, r *http.Request) {
	// Aqui você pode adicionar a lógica do que fazer com o GET
	log.Println("Requisição GET recebida")

	// Exemplo de resposta simples para o GET
	w.Write([]byte("GET request was received"))
}

func reverseProxy(target string) http.Handler {
	url, err := url.Parse(target)
	if err != nil {
		log.Fatal(err)
	}
	proxy := httputil.NewSingleHostReverseProxy(url)

	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		log.Printf("Proxy %s", r.URL)
		r.URL.Path = r.URL.Path[len("/"+r.URL.Path[1:strings.Index(r.URL.Path[1:], "/")+1]):] // Remove o prefixo
		proxy.ServeHTTP(w, r)
	})
}
