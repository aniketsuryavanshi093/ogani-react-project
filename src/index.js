import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './styles/index.css'

import { Provider } from "react-redux";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

// // dev tools middleware

import { watcherSaga } from "./saga/saga";
import rootReducer from "./saga";
const composeenhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const sagamiddleware  = createSagaMiddleware()
const store = createStore(rootReducer ,
  composeenhancers(applyMiddleware(sagamiddleware)))
sagamiddleware.run(watcherSaga)

ReactDOM.render(
<Provider store = {store}>
  <React.StrictMode>
  <BrowserRouter>

         <App />
  </BrowserRouter>
   
  </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
