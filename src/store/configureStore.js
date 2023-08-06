import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import reducer from "./bugs";

function configureStore() {
    const store = createStore(
        reducer,
        devToolsEnhancer({
            trace: true,
        })
    );
    return store;
}

export default configureStore;
