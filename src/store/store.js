import { combineReducers, configureStore } from "@reduxjs/toolkit";
import loginReducer from "./../slice/loginSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

//  export const store = configureStore({
//     reducer:{
//         auth:loginReducer
//     }
//  })

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  auth: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

let persistor = persistStore(store);

export default persistor;
