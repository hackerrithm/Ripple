import * as React from 'react';

import { Button } from '@material-ui/core';

interface ComponentProps {
    name: string;
    clickHandler: (val: any) => void;
}

class CustomButton extends React.Component<any, ComponentProps, any> {

    constructor(props: ComponentProps) {
        super(props);
    }

    handleClick = () => {
        this.props.clickHandler(this.props.name);
    };

    render() {
        return (
            <Button variant="contained" color={this.props.colorValue} onClick={this.handleClick}>
                {this.props.displayIcon}
            </Button>
        );
    }

}

export default CustomButton;