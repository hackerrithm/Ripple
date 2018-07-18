import * as React from 'react';

import { AppBar, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { default as FavoriteIcon } from '@material-ui/icons/Favorite';
import { default as HelpIcon } from '@material-ui/icons/Help';
import { default as PersonPinIcon } from '@material-ui/icons/PersonPin';
import { default as PhoneIcon } from '@material-ui/icons/Phone';
import { default as ShoppingBasket } from '@material-ui/icons/ShoppingBasket';
import { default as ThumbDown } from '@material-ui/icons/ThumbDown';
import { default as ThumbUp } from '@material-ui/icons/ThumbUp';

import { default as Company } from './company';

function TabContainer(props: any) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}


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

type OwnProps = {
    name: string;
    value: number,
    color: String
}

class About extends React.Component<any, OwnProps, any> {

    constructor(props: OwnProps) {
        super(props)
        this.state = {
            name: '',
            value: 0,
            color: 'select a color',
        };

        this.changeColor = this.changeColor.bind(this);
    }



    handleChange = (event: any, value: any) => {
        this.setState({ value });
        // this.setState({  })
    };

    public changeColor = (newColor: String) => {
        this.setState({
            color: newColor
        })
    }


    render() {
        const { classes } = this.props;
        const { value, color } = this.state;

        return (

            <div>
                <br />
                {/* Main page */}
                <Grid container={true}>
                    <Grid item={true} xs={1} sm={1}>

                    </Grid>
                    <Grid item={true} xs={10} sm={10}>
                        <div className={classes.root}>
                            <AppBar position="static" color="default">
                                <Tabs
                                    value={value}
                                    onChange={this.handleChange}
                                    scrollable
                                    scrollButtons="on"
                                    indicatorColor="primary"
                                    textColor="primary"
                                >
                                    <Tab label="Item One" icon={<PhoneIcon />} />
                                    <Tab label="Item Two" icon={<FavoriteIcon />} />
                                    <Tab label="Item Three" icon={<PersonPinIcon />} />
                                    <Tab label="Item Four" icon={<HelpIcon />} />
                                    <Tab label="Item Five" icon={<ShoppingBasket />} />
                                    <Tab label="Item Six" icon={<ThumbDown />} />
                                    <Tab label="Item Seven" icon={<ThumbUp />} />
                                </Tabs>
                            </AppBar>
                            {value === 0 && <TabContainer>Item One</TabContainer>}
                            {value === 1 && <TabContainer>Item Two</TabContainer>}
                            {value === 2 && <TabContainer>Item Three</TabContainer>}
                            {value === 3 && <TabContainer>Item Four</TabContainer>}
                            {value === 4 && <TabContainer>Item Five</TabContainer>}
                            {value === 5 && <TabContainer>Item Six</TabContainer>}
                            {value === 6 && <TabContainer>Item Seven</TabContainer>}
                        </div>
                        <div className="parent-component">
                            <header className="header">
                                <h4>Parent Component</h4>
                                <p>{color}</p>
                            </header>
                            <Company changeColor={this.changeColor} />
                        </div>
                    </Grid>
                    <Grid item={true} xs={1} sm={1}>

                    </Grid>

                </Grid>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(About);