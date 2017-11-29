package main

import (
	"docs/api"
	"github.com/gorilla/mux"
	"net/http"
)


func main() {

	api := api.API{}

	r := mux.NewRouter()

	r.HandleFunc("/", api.IndexHandler).Methods("GET")

	r.PathPrefix("/static/").Handler(http.StripPrefix("/static/", http.FileServer(http.Dir("static/"))))
	http.ListenAndServe("0.0.0.0:8080", r)

}
