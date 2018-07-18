package web

import (
	"fmt"
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/engine"
)

type (
	errHandlerFunc func(http.ResponseWriter, *http.Request) error
)

func (h errHandlerFunc) ServeHTTP(w http.ResponseWriter, r *http.Request) {
	if err := h(w, r); err != nil {
		//h.handle(w, err)
		fmt.Println(w, err)
	}
}

// NewWebAdapter handler for REST methods
func NewWebAdapter(f engine.Factory) http.Handler {
	r := mux.NewRouter()

	q := handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS"}),
		handlers.AllowedOrigins([]string{"*"}))(r)
	return q
}
