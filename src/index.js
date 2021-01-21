/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
*/

//import AppRouter from "./routers/AppRouter";

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
serviceWorker.unregister();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

///**********************************
/*
import React from 'react';
//import {render} from "react-dom";
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import getAppStore from './store/store';
//import { getBooks } from './actions/TaxFilingApllicationActions';
import './styles/styles.scss';
//import { getLogin } from './actions/TaxFilingApllicationActions';

import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const store = getAppStore();*/
/*
const template = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);*/

/*
const template=(
<Provider store={store}>
  <Router>
        <AppRouter />
  </Router>
</Provider>
);
*/
/*
store.dispatch(getLogin()).then(() => {
    ReactDOM.render(template, document.getElementById('root'));
});

ReactDOM.render(template, document.getElementById('root'));
*/
