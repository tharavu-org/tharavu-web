import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
if (process.env.NODE_ENV === `development`) {
  // eslint-disable-next-line global-require
  const { createLogger } = require(`redux-logger`);
  const loggerMiddleware = createLogger({
    collapsed: true,
  });
  middlewares.push(loggerMiddleware);
}
const middlewareEnhancer = applyMiddleware(...middlewares);
const composedEnhancers = compose(middlewareEnhancer);
const store = createStore(rootReducer, {}, composedEnhancers);
sagaMiddleware.run(rootSaga);
export default store;
