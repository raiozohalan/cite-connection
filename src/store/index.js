/* eslint-disable import/no-anonymous-default-export */
import { createStore, compose, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage'
import { persistCombineReducers, persistStore } from 'redux-persist';
import rootSaga from './root'

import user from './user/reducer' 

const rootReducer = { user }

export default () => {
  let middleware = []

  const sagaMiddleware = createSagaMiddleware()
  middleware = [sagaMiddleware]

  const persistConfig = {
    key: 'root',
    storage,
    whitelist: [
      'user', 
    ]
  }

  const persistReducer = persistCombineReducers(persistConfig, rootReducer)

  const store = createStore(
    persistReducer,
    compose(
      applyMiddleware(...middleware)
    ),
  )

  sagaMiddleware.run(rootSaga)
  const persistor = persistStore(store)

  return { store, persistor }
}