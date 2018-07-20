import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';
import { TextField, Button, Icon } from '@material-ui/core';

const styles: any = (theme: any) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
    menu: {
        width: 200,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

interface IMyComponentProps {
    name: any
    classes: any
    theme: any
}

// interface IMyComponentState {
//     name: any
//     password: string
//     multiline: string
//     currency: string
// }

class Login extends React.Component<IMyComponentProps, any, any> {

    constructor(props: IMyComponentProps) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state = {
        username: '',
        password: '',
        multiline: 'Controlled',
        currency: 'EUR',
    };

    handleChange = (name: any) => (event: any) => {
        this.setState({
            [name]: event.target.value,
        });
    };

    handleSubmit = (e: any) => {
        e.preventDefault()
        const User = {
            username: this.state.username,
            password: this.state.password
        }

        console.log(User, " new chore");

        this.setState(User);

        fetch('http://localhost:7000/v1/auth/user/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(User),
        }).then((res) => res.json())
            .then((json) => {
                console.log(json);

            });;
    };


    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <form className={classes.container} noValidate autoComplete="off" onSubmit={this.handleSubmit}>
                    <TextField
                        id="username"
                        label="Name"
                        className={classes.textField}
                        value={this.state.username}
                        onChange={this.handleChange('username')}
                        margin="normal"
                    />
                    <TextField
                        id="password"
                        label="Password"
                        className={classes.textField}
                        value={this.state.password}
                        onChange={this.handleChange('password')}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" className={classes.button}>
                        Send
                        <Icon className={classes.rightIcon}>send</Icon>
                    </Button>
                </form>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Login);