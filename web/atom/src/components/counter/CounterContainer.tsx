
import React from 'react';
import CounterView from './CounterView';
import ErrorMessage from '../counter/Error';

// Define Counter Container State
export interface CounterContainerState {
    value: number;
    error: boolean;
}

class CounterContainer extends React.Component<{}, CounterContainerState> {
    constructor() {
        super({},null);
        this.state = {
            value: 0,
            error: false,
        };
    };

    render(): JSX.Element {
        return <CounterView
            {...this.state}
            handleDisplayError={() => this.handleDisplayError()}
            handleIncrease={(num) => this.handleIncrease(num)}
            handleDecrease={() => this.handleDecrease()} />;
    };

    private handleIncrease(num: number) {
        const { value } = this.state;
        this.setState({
            value: value + num,
            error: false,
        });
    };

    private handleDecrease():any {
        const { value } = this.state;
        if (value === 0) {
            this.setState({ error: true })
            return null;
        };

        this.setState({
            value: value - 1,
            error: false,
        });
    };

    private handleDisplayError():any {
        const { error } = this.state;
        if (error) {
            return <ErrorMessage />
        };
    };
};

export default CounterContainer;