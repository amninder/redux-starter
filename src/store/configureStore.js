import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer.js";
import logger from "./middleware/logger.js";

export default function () {
  return configureStore({
    middleware: [logger({ destination: "console" })],
    reducer,
  });
}
