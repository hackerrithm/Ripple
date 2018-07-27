package postgres

import (
	"fmt"

	"github.com/reacthead/hydrogen/kanna/ripple/internal/app/domain"
	"github.com/reacthead/hydrogen/kanna/ripple/internal/app/engine"
	"github.com/reacthead/hydrogen/kanna/ripple/internal/app/shared/database"
)

type (
	userRepository struct {
		sess database.GORMDB
	}
)

// NewUserRepository returns the session of user
func NewUserRepository(sess database.GORMDB) engine.UserRepository {
	return userRepository{sess: sess}
}

func (ur userRepository) Add(u *domain.User) error {
	ur.sess.NewRecord(u)
	ur.sess.Create(&u)
	ur.sess.NewRecord(u)
	return nil
}

func (ur userRepository) Find(id uint) (*domain.User, error) {
	var u domain.User
	err := ur.sess.Where(`id=?`, id).Find(&u)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (ur userRepository) OneByUserName(userName string) (*domain.User, error) {
	var u domain.User
	err := ur.sess.Where(`user_name=?`, userName).Find(&u)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil
}

func (ur userRepository) Update(id uint, user *domain.User) (*domain.User, error) {
	var u domain.User
	err := ur.sess.Where("id = ?", id).Model(&u).Updates(user)
	if err != nil {
		fmt.Println(err)
	}
	return &u, nil

}

func (ur userRepository) Delete(id uint) uint {
	ur.sess.Where("id = ?", id).Unscoped().Delete(&domain.User{})
	return id
}
