import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { idReducer } from "./id/id-reducer";
import { messageReducer } from "./message/message-reducer";

const rootReducer = combineReducers({
  message: messageReducer,
  idMatch: idReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
