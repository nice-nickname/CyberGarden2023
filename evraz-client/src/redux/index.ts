import { configureStore } from "@reduxjs/toolkit";
import stationOperationReducer from "./slices/station-operation-slice";
import stationReducer from "./slices/station-slice";
import openFormsReducer from "./slices/open-forms-slice";

export type RootState = ReturnType<typeof store.getState>;

export const store = configureStore({
  reducer: {
    stationOperationReducer,
    stationReducer,
    openFormsReducer,
  },
});
