import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './reducers';

export default function configureStore(preloadedState) {
  const middlewares = [];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const composedEnhancers = compose(middlewareEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);
  return store;
}
