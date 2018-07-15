import React from 'react';
import { Provider } from 'react-redux';
import * as redux from 'redux';
import thunk from 'redux-thunk';
import './App.css';
import reducers, * as state from './app/counter/reducer';
import Home from './components/home/home';
import About from './components/about/about';
import Login from './components/login/login';
import SignUp from './components/signup/signup';
import Tools from './components/tools/tools';
import { default as Navigation } from './components/navigation/navigation';
import withRoot from './withRoot';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const store: redux.Store<state.All> = redux.createStore(
  reducers,
  {} as state.All,
  redux.applyMiddleware(thunk),
)

const NavBar = () => {
  return (
    <div>
      <Navigation />
    </div>
  )
}

export const App: React.SFC<{}> = (_props) => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={Home} />
          <Route strict path="/tools" component={Tools} />
          <Route strict path="/about" component={About} />
          <Route strict path="/login" component={Login} />
          <Route strict path="/signup" component={SignUp} />
          <Route path="/logs" render={() => <h1>Logs</h1>} />
          <Route
            path="/children"
            children={({ match }) => {
              if (match) {
                return <h1>Children</h1>;
              }
              return null;
            }}
          />
        </div>
      </Router>
      {/* <Root /> */}
    </Provider>
  );
}

export default withRoot(App);
