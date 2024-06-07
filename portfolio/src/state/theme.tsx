import { createAction, createReducer } from "@reduxjs/toolkit";

export const shift = createAction<{ light: boolean }>("SHIFT");

const initialState = {
  light: true,
};

const themeReducer = createReducer(initialState, (builder) => {
  builder.addCase(shift, (state, action) => {
    state.light = action.payload.light;
  });
});

export default themeReducer;
