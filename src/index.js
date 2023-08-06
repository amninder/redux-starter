import configureStore from "./store/configureStore.js";
import * as actions from "./store/api.js";

const store = configureStore();

store.dispatch(
  actions.apiCallBegan({
    onSuccess: "bugsReceived",
    url: "/bugs",
  })
);
