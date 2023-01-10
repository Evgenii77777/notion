import { createReducer } from "@reduxjs/toolkit";
import { addId } from "./id-actions";

export const idReducer = createReducer(
  {
    id: null,
  },
  {
    [addId]: (state, { payload }) => {
      state.id = payload;
    },
  }
);
