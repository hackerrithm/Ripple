package postgres

import (
	"sync"

	"github.com/reacthead/hydrogen/kanna/ripple/internal/app/engine"
	"github.com/reacthead/hydrogen/kanna/ripple/internal/app/shared/database"
)

type (
	storageFactory struct {
		sess database.GORMDB
	}
)

var (
	userRepositoryInstance engine.UserRepository
	userRepositoryOnce     sync.Once
)

// NewStorage function returns the specific session
func NewStorage(session database.GORMDB) engine.StorageFactory {
	return &storageFactory{session}
}

func (sf *storageFactory) NewUserRepository() engine.UserRepository {
	userRepositoryOnce.Do(func() {
		userRepositoryInstance = NewUserRepository(sf.sess)
	})
	return userRepositoryInstance
}
