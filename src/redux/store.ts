import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "redux/reducers/reducers";
import rootSaga from "redux/sagas/root";

const isProduction = process.env.NODE_ENV === "production";

const composeSetup =
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && !isProduction
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    : compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(applyMiddleware(sagaMiddleware), composeSetup)
);

sagaMiddleware.run(rootSaga);

export default store;
