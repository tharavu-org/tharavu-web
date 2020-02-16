import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [];
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
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}
