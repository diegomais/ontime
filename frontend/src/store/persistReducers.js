import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

export default (reducers) => {
  const persistedReducer = persistReducer(
    { storage, key: '@OnTime', whitelist: ['auth'] },
    reducers
  );
  return persistedReducer;
};
