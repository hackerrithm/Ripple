import * as React from 'react';

import {
    Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid,
    MobileStepper, Paper, Typography, Card, CardHeader, Avatar, IconButton, CardMedia, CardContent, CardActions, Collapse
} from '@material-ui/core';
import spacing from '@material-ui/core/styles/spacing';
import classnames from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import CounterContainer from '../counter/CounterContainer';
import { default as FavoriteIcon } from '@material-ui/icons/Favorite';
import { default as ShareIcon } from '@material-ui/icons/Share';
import { default as ExpandMoreIcon } from '@material-ui/icons/ExpandMore';
import { default as MoreVertIcon } from '@material-ui/icons/MoreVert';


import red from '@material-ui/core/colors/red';

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
    avatar: {
        backgroundColor: red[500],
    },
});

const tutorialSteps = [
    {
        label: 'How to be happy :)',
        imgPath: 'https://images3.alphacoders.com/187/187129.jpg',
    },
    {
        label: '1. Work with something that you like, like…',
        imgPath: 'https://i.imgur.com/X3CPUeT.jpg',
    },
    {
        label: '2. Keep your friends close to you and hangout with them',
        imgPath: 'https://i.imgur.com/X3CPUeT.jpg',
    },
    {
        label: '3. Travel everytime that you have a chance',
        imgPath: 'https://i.imgur.com/X3CPUeT.jpg',
    },
    {
        label: '4. And contribute to Material-UI :D',
        imgPath: 'https://i.imgur.com/X3CPUeT.jpg',
    },
];


class Home extends React.Component<any, any, any> {

    public state = {
        open: false,
        activeStep: 0,
        expanded: false
    };

    public handleNext = () => {
        this.setState((prevState: any) => ({
            activeStep: prevState.activeStep + 1,
        }));
    };

    public handleBack = () => {
        this.setState((prevState: any) => ({
            activeStep: prevState.activeStep - 1,
        }));
    };


    public handleClose = () => {
        this.setState({
            open: false,
        });
    };

    public handleClick = () => {
        this.setState({
            open: true,
        });
    };

    handleExpandClick = () => {
        this.setState((state: any) => ({ expanded: !state.expanded }));
    };


    render() {
        const { classes, theme } = this.props;
        const { open, activeStep } = this.state;
        const maxSteps = tutorialSteps.length;

        return (
            <div>
                {/* Main page */}
                <Grid container={true}>
                    <Grid item={true} xs={12}>
                        <div className={classes.root}>
                            <img
                                className={classes.img}
                                src={tutorialSteps[activeStep].imgPath}
                                alt={tutorialSteps[activeStep].label}
                            />
                            <MobileStepper
                                steps={maxSteps}
                                position="static"
                                activeStep={activeStep}
                                className={classes.mobileStepper}
                                nextButton={
                                    <Button size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                                        Next
                                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
                                    </Button>
                                }
                                backButton={
                                    <Button size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                                        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
                                        Back
                                    </Button>
                                }
                            />
                        </div>
                        <div className={classes.root}>
                            <Dialog open={open} onClose={this.handleClose}>
                                <DialogTitle>Super Secret Password</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>1-2-3-4-5</DialogContentText>
                                </DialogContent>
                                <DialogActions>
                                    <Button color="primary" onClick={this.handleClose}>
                                        OK
                                    </Button>
                                </DialogActions>
                            </Dialog>
                            <Button variant="contained" color="secondary" onClick={this.handleClick}>
                                Super Secret Password
                            </Button>
                        </div>
                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        <CounterContainer />
                    </Grid>
                    <Grid item={true} xs={12} sm={6}>
                        ignored
                    </Grid>
                    <Grid item={true} xs={6} sm={4}>
                        <div>
                            <Card className={classes.card}>
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe" className={classes.avatar}>
                                            R
                                        </Avatar>
                                    }
                                    action={
                                        <IconButton>
                                            <MoreVertIcon />
                                        </IconButton>
                                    }
                                    title="Shrimp and Chorizo Paella"
                                    subheader="September 14, 2016"
                                />
                                <CardMedia
                                    className={classes.media}
                                    image="/static/images/cards/paella.jpg"
                                    title="Contemplative Reptile"
                                />
                                <CardContent>
                                    <Typography component="p">
                                        This impressive paella is a perfect party dish and a fun meal to cook together with
                                        your guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                    </Typography>
                                </CardContent>
                                <CardActions className={classes.actions} disableActionSpacing>
                                    <IconButton aria-label="Add to favorites">
                                        <FavoriteIcon />
                                    </IconButton>
                                    <IconButton aria-label="Share">
                                        <ShareIcon />
                                    </IconButton>
                                    <IconButton
                                        className={classnames(classes.expand, {
                                            [classes.expandOpen]: this.state.expanded,
                                        })}
                                        onClick={this.handleExpandClick}
                                        aria-expanded={this.state.expanded}
                                        aria-label="Show more"
                                    >
                                        <ExpandMoreIcon className="material-icons" />
                                    </IconButton>
                                </CardActions>
                                <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                                    <CardContent>
                                        <Typography paragraph variant="body2">
                                            Method:
                            </Typography>
                                        <Typography paragraph>
                                            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                                            minutes.
                            </Typography>
                                        <Typography paragraph>
                                            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                                            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                                            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving
                                            chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion,
                                            salt and pepper, and cook, stirring often until thickened and fragrant, about 10
                                            minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                            </Typography>
                                        <Typography paragraph>
                                            Add rice and stir very gently to distribute. Top with artichokes and peppers, and
                                            cook without stirring, until most of the liquid is absorbed, 15 to 18 minutes.
                                            Reduce heat to medium-low, add reserved shrimp and mussels, tucking them down into
                                            the rice, and cook again without stirring, until mussels have opened and rice is
                                            just tender, 5 to 7 minutes more. (Discard any mussels that don’t open.)
                            </Typography>
                                        <Typography>
                                            Set aside off of the heat to let rest for 10 minutes, and then serve.
                            </Typography>
                                    </CardContent>
                                </Collapse>
                            </Card>
                        </div>
                    </Grid>
                    <Grid item={true} xs={6} sm={4}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>
                    <Grid item={true} xs={6} sm={4}>
                        <Paper className={classes.paper}>xs=6 sm=3</Paper>
                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Home);