package main

import (
	"encoding/json"
	"log"
	"net/http"
	"net/http/httputil"
	"net/url"
	"os"
	"strings"
)

type RouteConfig struct {
	Path   string `json:"path"`
	Target string `json:"target"`
}

type GatewayConfig struct {
	Routes []RouteConfig `json:"routes"`
}

func main() {
	// Carrega a configuração do arquivo JSON
	config, err := loadConfig("config.json")
	if err != nil {
		log.Fatalf("Erro ao carregar configuração: %v", err)
	}

	// Configura as rotas dinamicamente
	for _, route := range config.Routes {
		log.Println("Route loaded  Path: ", route.Path, " Target: ", route.Target)

		if route.Target == "direct" {
			// Rota direta (como o /get)
			http.HandleFunc(route.Path, getHandler)
		} else {
			// Rota com proxy reverso
			http.Handle(route.Path, reverseProxy(route.Target))
		}
	}

	log.Println("API Gateway rodando na porta 8000")
	log.Fatal(http.ListenAndServe(":8000", nil))
}

func loadConfig(filename string) (*GatewayConfig, error) {
	file, err := os.ReadFile(filename)
	if err != nil {
		return nil, err
	}

	var config GatewayConfig
	err = json.Unmarshal(file, &config)
	if err != nil {
		return nil, err
	}

	return &config, nil
}

// Função para manipular as requisições GET
func getHandler(w http.ResponseWriter, r *http.Request) {
	log.Println("Requisição GET recebida")
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
		// Remove o prefixo do caminho
		pathParts := strings.SplitN(r.URL.Path, "/", 3)
		if len(pathParts) > 2 {
			r.URL.Path = "/" + pathParts[2]
		} else {
			r.URL.Path = "/"
		}
		proxy.ServeHTTP(w, r)
	})
}
