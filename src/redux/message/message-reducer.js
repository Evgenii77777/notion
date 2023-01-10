import { createReducer } from "@reduxjs/toolkit";
import { addMessage, toggleBacktSide } from "./message-action";

export const messageReducer = createReducer(
  {
    message: null,
    visible: false,
  },
  {
    [addMessage]: (state, { payload }) => {
      state.message = payload;
    },
    [toggleBacktSide]: (state, { payload }) => {
      if (payload === "backSide") {
        state.visible = false;
      }
    },
  }
);
