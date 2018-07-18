import * as React from 'react';

import { Paper } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = (theme: any) => ({
    flex: {
        flex: 1,
    }
});

interface ColorProps {
    changeColor: (e: any) => void;
    classes: any
}

class Company extends React.Component<ColorProps, any, any> {

    constructor(props: ColorProps) {
        super(props);
    }

    private handleClick = (e:any) => this.props.changeColor(e.target.value);

    render() {
        const { classes } = this.props;

        return (
            <div>
                <div className="child-component">
                    <h4>Child Component</h4>

                    <button value="Red" onClick={this.handleClick}>
                        Red
      </button>

                    <button value="Blue" onClick={this.handleClick}>
                        Blue
      </button>

                    <button value="White" onClick={this.handleClick}>
                        White
      </button>
                </div>

                <Paper className={classes.paper}>
                    <h2>Kemar Galloway</h2>
                </Paper>
            </div>
        );
    }
}

export default withStyles(styles, { withTheme: true })(Company);