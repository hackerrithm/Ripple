import { CounterContainerState } from 'components/counter/CounterContainer';
import React from 'react';

import { Button } from '@material-ui/core';

// Define our Functions passed down
interface CounterViewProps {
    handleDecrease: () => void;
    handleIncrease: (num: number) => void; //Define a function expecting a parameter
    handleDisplayError: () => void;
}

// Here is our first use of the 'type alias' and the 'Intersection types (&)' 
//type ComponentProps = CounterContainerState & CounterViewProps

// Another way we can do this is by using Interface again
interface ComponentProps extends CounterContainerState, CounterViewProps {}

const CounterView = (props: ComponentProps): JSX.Element => {
    return (
        <div>
            <h1>Beer Drank: {props.value}</h1>
            {props.handleDisplayError()}
            <hr />
            <div className="basic-padding">
                <label>Increase: </label>
                {/* <button onClick={() => props.handleIncrease(1)}>+</button> */}
                <Button variant="contained" color="primary" onClick={() => props.handleIncrease(1)}>
                    +
                </Button> 
            </div>
            <br />
            <div className="basic-padding">
                <label>Decrease: </label>
                {/* <button onClick={() => props.handleDecrease()}>-</button> */}
                <Button variant="contained" color="secondary" onClick={() => props.handleDecrease()}>
                    -
                </Button> 
            </div>
            <hr />
        </div>
    );
};

export default CounterView;