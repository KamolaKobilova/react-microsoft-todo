import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../auth/reducer';
import logger from 'redux-logger';
import persistReducer from 'redux-persist/es/persistReducer';

const persistConfig = {
    key: 'root',
    storage,
    whiteList: ['auth']
};
 const rootReducer = combineReducers({
     auth: authReducer
 });

 const persistReducer = persistReducer(persistConfig, rootReducer)
 const store = createStore(persistReducer,applyMiddleware(logger))
 let persistor = persistStore(store)
 
   export { store, persistor}
 