import { Button } from '@material-ui/core';
import * as React from 'react';
import { CounterContainerState } from './counter.container';

interface CounterViewProps {
  handleDecrease: (num: any) => void;
  handleIncrease: (num: any) => void; //Define a function expecting a parameter
}

interface ComponentProps extends CounterContainerState, CounterViewProps { }


const CounterView = (props: ComponentProps): JSX.Element => {
  return (
    <div>
      <div className='hero'>
        <h1>{props.value}</h1>
      </div>
      <form>
        <div className="basic-padding">
          <label>Increase: </label>
          <Button variant="contained" color="primary" onClick={props.handleIncrease}>
                +
          </Button>
        </div>
        <div className="basic-padding">
          <label>Decrease: </label>
          <Button variant="contained" color="secondary" onClick={props.handleDecrease}>
                -
          </Button>
        </div>
        {/* <button ref='increment' onClick={this._onClickIncrement}>click me!</button> */}
        {/* <button ref='save' disabled={isSaving} onClick={this._onClickSave}>{isSaving ? 'saving...' : 'save'}</button> */}
        {/* <button ref='load' disabled={isLoading} onClick={this._onClickLoad}>{ isLoading ? 'loading...' : 'load'}</button> */}
        {/* {props.error ? <div className='error'>{props.handleDisplayError}</div> : null} */}

      </form>
    </div>
  );
};

export default CounterView;