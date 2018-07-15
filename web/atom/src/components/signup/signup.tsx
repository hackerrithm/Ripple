import * as React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: any) => ({
    flex: {
        flex: 1,
    },
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
});

class SignUp extends React.Component<any, any, any> {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                Sign Up
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(SignUp);