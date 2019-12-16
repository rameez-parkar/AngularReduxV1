import { createStore, combineReducers } from "redux";
import { Reducer1, Reducer2 } from "src/app/redux-files/reducer";
export const Store = createStore(
  combineReducers({
    1: Reducer1,
    2: Reducer2
  })
);
