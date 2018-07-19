package web

import (
	"fmt"
	"log"
	"net/http"
	"strconv"

	"github.com/alioygur/gores"
	"github.com/gorilla/mux"
	"github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/domain"
	"github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/engine"
)

type response struct {
	Result interface{} `json:"result"`
}

type (
	user struct {
		engine.User
	}
)

func newUser(f engine.Factory) *user {
	return &user{f.NewUser()}
}

func (u *user) activate(w http.ResponseWriter, r *http.Request) error {
	req := new(engine.UserActivateRequest)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	if err := u.Activate(req); err != nil {
		tokenErr, ok := err.(*engine.TokenErr)
		if ok {
			if tokenErr.Expired() {
				return newWebErr(expiredTokenErrCode, http.StatusBadRequest, err)
			}
			return newWebErr(invalidTokenErrCode, http.StatusBadRequest, err)
		}
		return err
	}

	gores.NoContent(w)
	return nil
}

func (u *user) me(w http.ResponseWriter, r *http.Request) error {
	me := domain.UserMustFromContext(r.Context())
	req := engine.ShowUserRequest{ID: me.ID}
	usr, err := u.Show(&req)
	if err != nil {
		return err
	}
	return gores.JSON(w, http.StatusOK, response{usr})
}

//

func (u *user) retrieve(w http.ResponseWriter, r *http.Request) error {

	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	usr, err := u.Get(id)
	if err != nil {
		return err
	}

	RespondWithJSON(w, http.StatusOK, usr)
	return nil
}

func (u *user) register(w http.ResponseWriter, r *http.Request) error {
	req := new(domain.User)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Register(req)
	if err != nil {
		return err
	}

	RespondWithJSON(w, http.StatusOK, usr)

	return nil
}

func (u *user) login(w http.ResponseWriter, r *http.Request) error {
	req := new(domain.User)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Login(req)
	if err != nil {
		return err
	}

	jwt, err := u.GenToken(usr, engine.AuthToken)
	if err != nil {
		return err
	}

	RespondWithJSON(w, http.StatusOK /*usr*/, response{jwt})

	return nil
}

func (u *user) edit(w http.ResponseWriter, r *http.Request) error {
	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		return err
	}
	id := uint(i)

	req := new(domain.User)
	if err := decodeReq(r, req); err != nil {
		return err
	}

	usr, err := u.Edit(id, req)
	if err != nil {
		return err
	}

	RespondWithJSON(w, http.StatusOK, usr)

	return nil
}

func (u *user) remove(w http.ResponseWriter, r *http.Request) error {
	params := mux.Vars(r)
	uid := params["id"]
	i, err := strconv.Atoi(uid)
	if err != nil {
		log.Fatal(err)
	}
	id := uint(i)

	removedObjID := u.Remove(id)
	if err != nil {
		log.Fatal(err)
	}

	fmt.Println(removedObjID)

	return nil
}
