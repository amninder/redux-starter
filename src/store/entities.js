import { combineReducers } from "redux";
import bugReducer from "./bugs.js";
import projectRecuder from "./projects.js";

export default combineReducers({
  bugs: bugReducer,
  projects: projectRecuder,
});
