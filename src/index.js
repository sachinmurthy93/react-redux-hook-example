import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import Counter from './components/counter-component';
import Name from './components/name-component';
import counterReducer from './reducers/counter-reducer';
import nameReducer from './reducers/name-reducer';

const rootReducer = combineReducers({
  counterReducer,
  nameReducer
});

const INITIAL_STATE = {};



const store = createStore(rootReducer, 
                          INITIAL_STATE,
                          window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

function App() {
  return (
    <Provider store={store}>
      <Counter />
      <Name />
    </Provider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
