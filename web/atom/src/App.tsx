import './App.css';

import React from 'react';

import Home from './components/home/home';
import { default as Navigation } from './components/navigation/navigation';
import withRoot from './withRoot';

export const App: React.StatelessComponent<{}> = (props) => {
  return (
    <div className="container-fluid">
      <Navigation />
      <Home />
      {/* {props.children} */}
      {/* <Footer /> */}
    </div>

  );
}

export default withRoot(App);
