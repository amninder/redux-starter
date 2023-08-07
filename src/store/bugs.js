import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";
import { apiCallBegan } from "./api.js";

let lastId = 0;

// Slices
const slice = createSlice({
  name: "bugs",
  initialState: {
    lastFetch: null,
    list: [],
    loading: false,
  },
  reducers: {
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAdded: (bugs, action) => {
      bugs.list.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },
    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },
    bugRemoved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },
    bugAssignedToUser: (bugs, action) => {
      const { bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs[index].userId = userId;
    },
  },
});

export const {
  bugAdded,
  bugAssignedToUser,
  bugRemoved,
  bugResolved,
  bugsReceived,
  bugsRequestFailed,
  bugsRequested,
} = slice.actions;
export default slice.reducer;

// Action Creators
const url = "/bugs";
export const loadBugs = () =>
  apiCallBegan({
    onStart: bugsRequested.type,
    onSuccess: bugsReceived.type,
    onError: bugsRequestFailed.type,
    url,
  });

// Selector
// Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.list.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.list.filter((bug) => bug.userId === userId)
  );
