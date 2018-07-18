package domain

type (
	// Profile used as user profile
	Profile struct {
		UID                 uint `gorm:"primary_key"`
		UserID              uint
		About               string `json:"about"`
		ProfileType         string `json:"profileType"`
		ProfilePicture      Image  `json:"profilePicture"`
		ProfilePictureID    uint
		BackgroundPicture   Image `json:"backgroundPicture"`
		BackgroundPictureID uint
		Followers           []User `gorm:"many2many:user_followers"`
	}

	// Image used as images model
	Image struct {
		ID   uint `gorm:"primary_key"`
		SRC  string
		ALT  string
		Type string
		Name string
	}

	// About used as descriptive information on a particular user
	About struct {
		ID         uint `gorm:"primary_key"`
		Occupation Occupation
		Education  Education
	}

	// Occupation stores job details
	Occupation struct {
		ID       uint `gorm:"primary_key"`
		Position string
		Company  string
	}

	// Education stores past and current education data
	Education struct {
		ID         uint `gorm:"primary_key"`
		HighSchool string
		College    string
	}
)
