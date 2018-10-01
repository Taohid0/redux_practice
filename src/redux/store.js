import {createStore} from "redux";
import {todoApp} from "./reducer/reducers";
export const store = createStore(todoApp);

