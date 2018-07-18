import * as React from 'react';
import { connect } from 'react-redux';
import * as redux from 'redux';

import { decrementCounter, incrementCounter } from '../../app/counter/index';
import loadable from '../../app/counter/loadable';
import * as state from '../../app/counter/reducer';
import { compose } from '../../utils';
import CounterView from './counter';
import { IOwnProps } from './types';

type LoadingState = {
  isSaving: boolean,
  isLoading: boolean,
}

type ConnectedState = LoadingState & {
  counter: { value: number }
  error: string,
}

type ConnectedDispatch = {
  increment: (n: any) => void
  decrement: (n: any) => void
  //save: (n: number) => void
  //load: () => void
}



const mapStateToProps = (state: state.All): ConnectedState => ({
  counter: state.counter,
  isSaving: state.isSaving,
  isLoading: state.isLoading,
  error: state.error,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<state.All>): ConnectedDispatch => ({
  increment: (n: any) =>
    dispatch(incrementCounter(n)),
  decrement: (n: any) =>
    dispatch(decrementCounter(n))
  //load: () =>
  //dispatch(loadCount({})),
  //save: (value: number) =>
  //dispatch(saveCount({ value })),
})

class PureCounter extends React.Component<ConnectedState & ConnectedDispatch & IOwnProps, {}> {

  componentDidMount()  {
    console.log('this is counter');
  }

  _onClickIncrement = (e: any) => {
    e.preventDefault()
    this.props.increment(1)
  }

  _onClickDecrement = (e: any) => {
    e.preventDefault()
    this.props.decrement(1)
  }

  _onClickSave = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!this.props.isSaving) {
      //this.props.save(this.props.counter.value)
    }
  }

  _onClickLoad = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (!this.props.isLoading) {
      //this.props.load()
    }
  }

  render() {
    const { counter } = this.props
    return (
      <CounterView
      {...counter}
      handleIncrease={(num) => this._onClickIncrement(num)}
      handleDecrease={(num) => this._onClickDecrement(num)}/>
    )
  }
}

const isLoading = (p: LoadingState) =>
  p.isLoading || p.isSaving

export const Counter = compose(
  PureCounter,
  loadable(isLoading),
  connect(mapStateToProps, mapDispatchToProps),
)
