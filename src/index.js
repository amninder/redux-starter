import configureStore from "./store/configureStore.js";
import { loadBugs } from "./store/bugs.js";

const store = configureStore();

// UI Layer
store.dispatch(loadBugs());

setTimeout(() => store.dispatch(loadBugs), 2000);
