import configureStore from "./store/configureStore.js";
import { loadBugs } from "./store/bugs.js";

const store = configureStore();
store.dispatch(loadBugs());
