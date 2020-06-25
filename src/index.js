import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "@fortawesome/fontawesome-free/css/all.min.css";
import '@cassette/player/dist/css/cassette-player.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import allReducers from './redux/reducers';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from 'redux-thunk';
import { BrowserRouter } from "react-router-dom";
import { loadState, saveState } from './libs/localState';
const persistedState = loadState()
const store = createStore(allReducers, { ...persistedState }, compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));
store.subscribe(() => {
  saveState(store.getState())
});

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
