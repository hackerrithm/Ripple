import * as React from 'react';

// import { Link } from 'react-router-dom';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@material-ui/core';
import spacing from '@material-ui/core/styles/spacing';
import withStyles from '@material-ui/core/styles/withStyles';
import { default as MenuIcon } from '@material-ui/icons/Menu';

const styles = (theme: any) => ({
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    root: {
        flexGrow: 1,
        paddingTop: spacing.unit * 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: spacing.unit * 4,
        marginBottom: 20,
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 700,
        maxWidth: '100%',
        overflow: 'hidden',
        width: '100%',
    },
    card: {
        maxWidth: 400,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    expand: {
        transform: 'rotate(0deg)',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
        marginLeft: 'auto',
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
});


class Navigation extends React.Component<any, any, any> {

    public state = {
        open: false,
        activeStep: 0,
        expanded: false
    };


    render() {
        const { classes } = this.props;

        return (
            <div>
                {/* Navbar start */}
                <AppBar position="static">
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Reacthead
                        </Typography>
                        <Button color="inherit">Login</Button>
                        {/* <div>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/topics">Topics</Link>
                                </li>
                            </ul>
                        </div> */}
                    </Toolbar>
                </AppBar>
                {/* Navbar end */}

            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Navigation);