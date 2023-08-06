import { bugAdded, bugResolved } from "./store/bugs";
import configureStore from "./store/configureStore";

const store = configureStore();

const unsubscribe = store.subscribe(() => {
    console.log("Store changed!", store.getState());
});

store.dispatch(bugAdded("bug1"));
store.dispatch(bugAdded("bug2"));
store.dispatch(bugAdded("bug3"));
store.dispatch(bugResolved(2));

unsubscribe();
