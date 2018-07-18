package engine

import (
	"errors"
	"fmt"
)

type (
	// ValidationErr validation error struck
	ValidationErr struct {
		msg  string
		args []interface{}
	}

	// TokenErr struct has msg and expired paremters
	TokenErr struct {
		msg     string
		expired bool
	}
)

var (
	// ErrNoRows returns not found
	ErrNoRows = errors.New("not found")
	// ErrEmailExists returns email already exists
	ErrEmailExists = errors.New("email already exists")
	// ErrEmailNotExists returns email not exists
	ErrEmailNotExists = errors.New("email not exists")
	// ErrInActiveUser returns inactive user
	ErrInActiveUser = errors.New("inactive user")
	// ErrWrongCredentials returns wrong cred
	ErrWrongCredentials = errors.New("wrong cred")
)

// NewValidationErr takes message and unspecified parameter
func NewValidationErr(msg string, args ...interface{}) error {
	return &ValidationErr{msg, args}
}

// NewTokenErr returns details of message and expiration for message
func NewTokenErr(msg string, expired bool) error {
	return &TokenErr{msg, expired}
}

func (e *ValidationErr) Error() string {
	return fmt.Sprintf(e.msg, e.args...)
}

// Error returns error message only
func (e *TokenErr) Error() string {
	return e.msg
}

// Expired returns expired
func (e *TokenErr) Expired() bool {
	return e.expired
}
