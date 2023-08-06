import { combineReducers } from "redux";
import bugReducer from "./bugs.js";
import projectRecuder from "./projects.js";
import usersReducer from "./users.js";

export default combineReducers({
  bugs: bugReducer,
  projects: projectRecuder,
  users: usersReducer,
});
