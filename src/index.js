import {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  getUnresolvedBugs,
  getBugsByUser,
} from "./store/bugs";
import configureAppStore from "./store/configureStore";
import { projectAdded } from "./store/projects.js";
import { userAdded } from "./store/users.js";

const store = configureAppStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(userAdded({ name: "User 1" }));
store.dispatch(userAdded({ name: "User 2" }));
store.dispatch(userAdded({ name: "User 3" }));
store.dispatch(userAdded({ name: "User 4" }));

store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug3" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugRemoved({ id: 2 }));

store.dispatch(projectAdded({ name: "Project 1" }));

store.dispatch(bugAssignedToUser({ bugId: 1, userId: 3 }));

console.log(getUnresolvedBugs(store.getState()));
console.log(getBugsByUser(3)(store.getState()));

store.dispatch((dispatch, getState) => {
  dispatch({ type: "bugReceived", bugs: [1, 2, 3] });
  console.log(getState());
});

store.dispatch((dispatch, getState) => {
  dispatch({ type: "error", payload: { message: "An error occured" } });
});

unsubscribe();
