import './App.css';

import React from 'react';

import Home from './components/home/home';
// import { default as Navigation } from './components/navigation/navigation';
import withRoot from './withRoot';

// import * as ReactDOM from 'react-dom'
import * as redux from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducers, * as state from './app/counter/reducer'

const store: redux.Store<state.All> = redux.createStore(
  reducers,
  {} as state.All,
  redux.applyMiddleware(thunk),
)

export const App: React.SFC<{}> = (_props) => {
  return (
    <Provider store={store}>
      {/* <Navigation /> */}
      <Home />
    </Provider>


  );
}

export default withRoot(App);
