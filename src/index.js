import { bugAdded, bugRemoved, bugResolved } from "./store/bugs";
import configureAppStore from "./store/configureStore";
import { projectAdded } from "./store/projects.js";

const store = configureAppStore();

const unsubscribe = store.subscribe(() => {
  console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded({ description: "bug1" }));
store.dispatch(bugAdded({ description: "bug2" }));
store.dispatch(bugAdded({ description: "bug3" }));
store.dispatch(bugResolved({ id: 2 }));
store.dispatch(bugRemoved({ id: 2 }));

store.dispatch(projectAdded({ name: "Project 1" }));

unsubscribe();
