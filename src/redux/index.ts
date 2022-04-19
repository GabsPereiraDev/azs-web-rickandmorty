import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage'
import rootSaga from './rootSagas';
import { persistStore, persistReducer } from 'redux-persist';
import { composeWithDevTools } from 'redux-devtools-extension'
import { applyMiddleware, createStore } from 'redux';
import reducers from './modules/combineReducers'

const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
    ]
};

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, reducers);

export interface IStore {

}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export { store, persistor };