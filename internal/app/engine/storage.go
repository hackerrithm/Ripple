package engine

import "github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/domain"

type (

	// UserRepository is repo interface for user
	UserRepository interface {
		Add(*domain.User) error
		Find(uint) (*domain.User, error)
		OneByUserName(string) (*domain.User, error)
		Update(uint, *domain.User) (*domain.User, error)
		Delete(uint) uint
	}

	// StorageFactory is interface for various storage
	StorageFactory interface {
		NewUserRepository() UserRepository
	}
)
