import reducer from "./reducer.js";
import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "./middleware/logger";

const store = createStore(reducer, applyMiddleware(logger));
export default store;
