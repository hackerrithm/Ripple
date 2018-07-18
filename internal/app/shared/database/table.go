package database

import "github.com/reacthead/hydrogen/Kanna/Ripple/internal/app/domain"

// CreateUser creates user table
func CreateUser(session GORMDB) {
	if session.HasTable(&domain.User{}) == false {
		session.CreateTable(&domain.User{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.User{})
	} else {
		session.AutoMigrate(&domain.User{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.User{})

	}
}

// CreateAddress creates user table
func CreateAddress(session GORMDB) {
	if session.HasTable(&domain.Address{}) == false {
		session.CreateTable(&domain.Address{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.Address{})
	} else {
		session.AutoMigrate(&domain.Address{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.Address{})

	}
}

// CreateState creates user table
func CreateState(session GORMDB) {
	if session.HasTable(&domain.State{}) == false {
		session.CreateTable(&domain.State{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.State{})
	} else {
		session.AutoMigrate(&domain.State{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.State{})

	}
}

// CreateCountry creates user table
func CreateCountry(session GORMDB) {
	if session.HasTable(&domain.Country{}) == false {
		session.CreateTable(&domain.Country{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.Country{})
	} else {
		session.AutoMigrate(&domain.Country{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.Country{})

	}
}

// CreateCity creates user table
func CreateCity(session GORMDB) {
	if session.HasTable(&domain.City{}) == false {
		session.CreateTable(&domain.City{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.City{})
	} else {
		session.AutoMigrate(&domain.City{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.City{})

	}
}

// CreateContact creates user table
func CreateContact(session GORMDB) {
	if session.HasTable(&domain.Contact{}) == false {
		session.CreateTable(&domain.Contact{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.Contact{})
	} else {
		session.AutoMigrate(&domain.Contact{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.Contact{})

	}
}

// CreateEmailAddress creates user table
func CreateEmailAddress(session GORMDB) {
	if session.HasTable(&domain.EmailAddress{}) == false {
		session.CreateTable(&domain.EmailAddress{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.EmailAddress{})
	} else {
		session.AutoMigrate(&domain.EmailAddress{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.EmailAddress{})

	}
}

// CreateProfile creates profile table
func CreateProfile(session GORMDB) {
	if session.HasTable(&domain.Profile{}) == false {
		session.CreateTable(&domain.Profile{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").CreateTable(&domain.Profile{})
	} else {
		session.AutoMigrate(&domain.Profile{})
		session.Set("gorm:table_options", "ENGINE=InnoDB").AutoMigrate(&domain.Profile{})

	}
}
