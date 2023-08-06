import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.js";
import logger from "./middleware/logger.js";
import toast from "./middleware/toast.js";

export default function () {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(logger({ destination: "console" }), toast),
    reducer,
  });
}
