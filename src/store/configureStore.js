import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.js";
import logger from "./middleware/logger.js";
import toast from "./middleware/toast.js";
import api from "./middleware/api";

export default function () {
  return configureStore({
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        logger({ destination: "console" }),
        toast,
        api
      ),
    reducer,
  });
}
