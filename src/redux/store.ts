import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


const middlewares = [thunk];

if (__DEV__ && !process.env.JEST_WORKER_ID) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

const configureStore = (preloadedState: any) => {
  const composedEnhancers = composeWithDevTools(
    applyMiddleware(...middlewares),
  );
  return createStore(persistedReducer, preloadedState, composedEnhancers);
};

const store = configureStore({});
const persistor = persistStore(store);

export {store, persistor};
