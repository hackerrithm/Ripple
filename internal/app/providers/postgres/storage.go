package postgres

import "github.com/reacthead/hydrogen/kanna/ripple/internal/app/shared/database"

type (
	tableName string

	repository struct {
		sess database.GORMDB
	}
)

const (
	user = `user`
)

func handleErr(err error) error {
	return err
}
