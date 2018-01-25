import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sideEffects/sagas';
import reducer from './reducer';

const sagaMiddleware = createSagaMiddleware();

// Use Redux DevTools Extension if available and not in production.
/* eslint-disable no-underscore-dangle */
const composeEnhancers = ((process.env.NODE_ENV !== 'production') && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
/* eslint-enable no-underscore-dangle */

const middleware = applyMiddleware(sagaMiddleware);

// If we aren't in production and we have redux devtools let's add that as middleware.
export const store = createStore(
  reducer,
  composeEnhancers(middleware),
);

sagaMiddleware.run(rootSaga);
