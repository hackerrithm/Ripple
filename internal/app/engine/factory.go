package engine

type (

	// Factory interface
	Factory interface {
		NewUser() User
	}

	// JWTSignParser supplies interface methods for signing and parsing
	JWTSignParser interface {
		Sign(claims map[string]interface{}, secret string) (string, error)
		Parse(tokenStr string, secret string) (map[string]interface{}, error)
	}

	// factory structrue
	factory struct {
		StorageFactory
		jwt JWTSignParser
	}
)

// New instances new engine factory
func New(sf StorageFactory, jwt JWTSignParser) Factory {
	return &factory{
		StorageFactory: sf,
		jwt:            jwt,
	}
}
