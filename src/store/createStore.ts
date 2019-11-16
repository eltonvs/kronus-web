import {
  applyMiddleware,
  compose,
  createStore,
  Middleware,
  Reducer,
} from 'redux'

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
  }
}

export default (reducers: Reducer, middlewares: Middleware[]) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(composeEnhancers(applyMiddleware(...middlewares)))
      : applyMiddleware(...middlewares)

  return createStore(reducers, enhancer)
}
