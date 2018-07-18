
export interface ICounterViewProps {
    handleDecrease: (num: any) => void;
    handleIncrease: (num: any) => void;
}

export interface IComponentProps extends ICounterContainerState, ICounterViewProps { }

export interface ICounterContainerState {
    value: any
}

export interface IOwnProps { }