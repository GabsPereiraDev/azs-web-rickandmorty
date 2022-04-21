
import reducers from './modules/combineReducers';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './rootSagas';
import { IEpisodeState } from './modules/episodes/dto/episodesState';
import { ICharacterState } from './modules/characters/dto/ICharacterState';
import { IFavoriteState } from './modules/favorites/dto/favoriteState';
import { IVisaState } from './modules/visa/dto/favoriteState';


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
    characters: ICharacterState
    favorites: IFavoriteState
    visa: IVisaState
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga)

export { store, persistor };