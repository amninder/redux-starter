import reducer from "./reducer.js";

function createStore(reducer) {
  let state;
  let listeners = [];
  function getState() {
    return state;
  }
  function dispatch(action) {
    state = reducer(state, action);
    for (let i = 0, len = listeners.length; i < len; i++) {
      listeners[i]();
    }
  }
  function subscribe(listener) {
    listeners.push(listener);
  }
  return { getState, dispatch, subscribe };
}

export default createStore(reducer);
