// import { Button } from '@material-ui/core';
import * as React from 'react';

class DisplayPanel extends React.Component<any, any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="calculator-display">
                <div>
                    <h1>{this.props.value}</h1>
                </div>
            </div>
        );
    }
}

export default DisplayPanel;