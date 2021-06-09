import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import favListsReducer from "./store/reducers/favLists";
import "./_axios-setting";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// Reducer
const rootReducer = favListsReducer;
// Store setting
const store = createStore(rootReducer, composeEnhancers());
const app = (<Provider store={store}>
    <App />
  </Provider>);
ReactDOM.render(app, document.getElementById("root"));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
