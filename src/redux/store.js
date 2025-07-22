import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"
import authReducer from './slices/authSlice.js'
import { encryptTransform } from "redux-persist-transform-encrypt";
const encryptor = encryptTransform({
  secretKey: import.meta.env.VITE_APP_REDUX_SECRET_KEY,
  onError: (error) => {
    console.error("Encryption error:", error);
  },
});


const persistConfig = {
  key: "auth",
  storage,
  transforms: [encryptor],
  whitelist: ["user", "token"]
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // required for redux-persist to work correctly
    }),
})

export const persistor = persistStore(store);
 