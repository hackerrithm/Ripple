package database

import (
	"log"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq" // _ needed
)

type (
	// GORMDB is exported db
	GORMDB struct {
		*gorm.DB
	}
)

// NewGormOpen exported for creating a new Postgresql instance
func NewGormOpen() (GORMDB, error) {
	db, err := gorm.Open("postgres",
		`host=localhost 
			user=postgres password=newcode
			dbname=pilot 
			sslmode=disable`)

	if err != nil {
		log.Fatal(err)
	}

	return GORMDB{db}, nil
}
