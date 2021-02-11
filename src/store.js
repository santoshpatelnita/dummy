import {createStore} from 'redux'
import rootRuducer from './reducer'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 import rootReducer from './reducers'

// const initialState = {
//     formData: formState,
//   };
const persistConfig = {
    key: 'root',
    storage,
    whiteList:['rootReducer']
  }
   
  const persistedReducer = persistReducer(persistConfig, rootReducer)
   
  export default () => {
    let store = createStore(persistedReducer)
    let persistor = persistStore(store)
    return { store, persistor }
  }
