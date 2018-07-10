import * as React from 'react'
import * as redux from 'redux'
import { connect } from 'react-redux'

import {
  incrementCounter,
  //loadCount,
  //saveCount,
} from '../counter'

import { compose } from '../../utils'
import * as state from '../../app/counter/reducer'

import loadable from '../../app/counter/loadable'

import { Button } from '@material-ui/core';

type OwnProps = {
}

type LoadingState = {
  isSaving: boolean,
  isLoading: boolean,
}

type ConnectedState = LoadingState & {
  counter: { value: number }
  error: string,
}

type ConnectedDispatch = {
  increment: (n: number) => void
  //save: (n: number) => void
  //load: () => void
}

const mapStateToProps = (state: state.All, ownProps: OwnProps): ConnectedState => ({
  counter: state.counter,
  isSaving: state.isSaving,
  isLoading: state.isLoading,
  error: state.error,
})

const mapDispatchToProps = (dispatch: redux.Dispatch<state.All>): ConnectedDispatch => ({
  increment: (n: number) =>
    dispatch(incrementCounter(n)),
  //load: () =>
  //dispatch(loadCount({})),
  //save: (value: number) =>
  //dispatch(saveCount({ value })),
})

class PureCounter extends React.Component<ConnectedState & ConnectedDispatch & OwnProps, {}> {

  _onClickIncrement = (e: any) => {
    e.preventDefault()
    this.props.increment(1)
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
    const { counter, /*isSaving, isLoading,*/ error } = this.props
    return <div>
      <div className='hero'>
        <strong>{counter.value}</strong>
      </div>
      <form>
        <div className="basic-padding">
          <label>Increase: </label>
          {/* <button onClick={() => props.handleIncrease(1)}>+</button> */}
          <Button variant="contained" color="primary" onClick={this._onClickIncrement}>
            +
          </Button>
        </div>
        {/* <button ref='increment' onClick={this._onClickIncrement}>click me!</button> */}
        {/* <button ref='save' disabled={isSaving} onClick={this._onClickSave}>{isSaving ? 'saving...' : 'save'}</button> */}
        {/* <button ref='load' disabled={isLoading} onClick={this._onClickLoad}>{ isLoading ? 'loading...' : 'load'}</button> */}
        {error ? <div className='error'>{error}</div> : null}

      </form>
    </div>
  }
}

const isLoading = (p: LoadingState) =>
  p.isLoading || p.isSaving

export const Counter = compose(
  PureCounter,
  loadable(isLoading),
  connect(mapStateToProps, mapDispatchToProps),
)
