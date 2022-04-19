
import reducers from './modules/combineReducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSagas';
import { IEpisodeState } from './modules/episodes/dto/episodesState';


const persistConfig = {
    key: 'root',
    storage,
    blacklist: [
    ]
};

const sagaMiddleware = createSagaMiddleware()

const persistedReducer = persistReducer(persistConfig, reducers);

export interface IStore {
    episodes: IEpisodeState
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export { store, persistor };