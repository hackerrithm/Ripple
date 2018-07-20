package web

import (
	"net/http"

	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
	"github.com/justinas/alice"
	"github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/engine"
)

// NewWebAdapter handler for REST methods
func NewWebAdapter(f engine.Factory) http.Handler {
	r := mux.NewRouter()

	base := alice.New(newSetUserMid(f.NewUser()))
	authRequired := base.Append(newAuthRequiredMid)

	user := newUser(f)

	r.Handle("/v1/auth/user/register", base.Then(errHandlerFunc(user.register))).Methods("POST")
	r.Handle("/v1/auth/user/login", base.Then(errHandlerFunc(user.login))).Methods("POST")
	r.Handle("/v1/auth/activate", base.Then(errHandlerFunc(user.activate))).Methods("POST")
	r.Handle("/v1/auth/user/retrieve/{id}", (errHandlerFunc(user.retrieve))).Methods("GET")
	r.Handle("/v1/auth/user/edit/{id}", errHandlerFunc(user.edit)).Methods("PUT")
	r.Handle("/v1/auth/user/remove/{id}", errHandlerFunc(user.remove)).Methods("DELETE")

	r.Handle("/v1/me", authRequired.Then(errHandlerFunc(user.me))).Methods("GET")

	q := handlers.CORS(handlers.AllowedHeaders([]string{"X-Requested-With", "Content-Type", "Authorization"}),
		handlers.AllowedMethods([]string{"GET", "POST", "PUT", "HEAD", "DELETE", "OPTIONS"}),
		handlers.AllowedOrigins([]string{"*"}))(r)
	return q
}
