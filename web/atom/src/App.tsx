import React from 'react';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import reducers, * as state from './app/counter/reducer';
import Home from './components/home/home';
import { default as Navigation } from './components/navigation/navigation';
import withRoot from './withRoot';


const store: redux.Store<state.All> = redux.createStore(
  reducers,
  {} as state.All,
  redux.applyMiddleware(thunk),
)

const Root = () => {
  return (
    <div>
      <Navigation />
      <Home />
    </div>
  )
}

export const App: React.SFC<{}> = (_props) => {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}

export default withRoot(App);
