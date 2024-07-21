import { configureStore } from "@reduxjs/toolkit";
import ecommerceReducer from "./authSlice";
import {persistReducer,persistStore} from "redux-persist";
import storage from "redux-persist/lib/storage";
const persistConfig ={
    key:"root",
    storage
}

const persistedReducer = persistReducer(persistConfig,ecommerceReducer)

const store = configureStore({
    reducer:{
       commerce:persistedReducer,
    }
});
export {store};
export const persistor = persistStore(store)