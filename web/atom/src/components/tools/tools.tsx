import * as React from 'react';

import { Grid } from '@material-ui/core';

import Calculator from '../calculator/calculator';
import { Counter } from '../counter/counter.container';

class Tools extends React.Component<any, any, any> {

    constructor(props: any) {
        super(props);
    }


    render() {

        return (
            <div className="container center-align">
                <Grid container={true} alignItems={'center'}>
                    <Grid item={true} xs={6} sm={6}>
                        <div>
                            <Calculator {...this.props.value} />
                        </div>
                    </Grid>
                    <Grid item={true} xs={6} sm={6}>
                        <Counter />
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Tools;