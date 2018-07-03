import './index.css';

// import { CssBaseline }from '@material-ui/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

// import { default as AppRouter } from './app/router/router';

ReactDOM.render(
    <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
