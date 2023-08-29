import { combineReducers, configureStore } from "@reduxjs/toolkit";
import CheckListSlice from "../features/checkList/model/CheckListSlice";
import CurrentClientSlice from "../entities/ClientItem/model/CurrentClientSlice";
import FilterAndSortSlice from "../widgets/FilterSortSection/model/FilterAndSortSlice";
const rootReducer = combineReducers({
  CheckListSlice,
  CurrentClientSlice,
  FilterAndSortSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
