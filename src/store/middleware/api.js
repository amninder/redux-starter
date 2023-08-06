import axios from "axios";
import * as actions from "../api.js";

const api = (store) => (next) => async (action) => {
  if (action.type !== actions.apiCallBegan.type) {
    return next(action);
  }
  next(action);
  const { url, method, data, onSuccess, onError } = action.payload;
  try {
    const response = await axios.request({
      baseURL: "http://localhost:9001/api",
      url,
      method,
      data,
    });
    store.dispatch(actions.apiCallSuccess(response.data));
    if (onSuccess) {
      store.dispatch({
        type: onSuccess,
        payload: response.data,
      });
    }
  } catch (error) {
    // General
    store.dispatch(actions.apiCallFailed(error));

    // Specific
    if (onError) {
      store.dispatch({
        payload: { message: error.message, name: error.name },
        type: onError,
      });
    }
  }
};
export default api;
